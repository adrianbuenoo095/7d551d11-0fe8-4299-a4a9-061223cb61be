import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { showInMapClicked } from "../lib/helper/showInMapClick";
import { useCart } from "./context/CartContext";
import { SearchContext } from "./context/SearchContext";
export interface EventProps {
  id: string;
  title: string;
  flyerFront: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: {
    id: string;
    name: string;
  };
}

const Card = () => {
  const { searchQuery } = useContext(SearchContext);
  const [events, setEvents] = useState<EventProps[]>([]);
  const [originalEvents, setOriginalEvents] = useState<EventProps[]>([]);
  const { dispatch } = useCart();
  const getEvents = async (): Promise<any> => {
    return await fetch(
      "https://teclead-ventures.github.io/data/london-events.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setOriginalEvents(data);
        setEvents(data);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = originalEvents.filter((event) =>
      event.title.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    setEvents(filteredEvents);
  }, [searchQuery, originalEvents]);

  return (
    <>
      <div>Public Events</div>
      <div className="events-gallery">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="user-profile">
              <img alt="User" />
              <span>{event.title}</span>
            </div>
            <div className="event-image-container">
              <img
                className="event-image"
                src={event.flyerFront}
                alt={event.title}
              />
            </div>
            <div className="event-details">
              <div className="event-location">
                <div>
                  <LocationOnIcon />
                </div>
                <div onClick={() => showInMapClicked(event.venue.name)}>
                  {event.venue.name}
                </div>
              </div>
              <div className="event-date">
                <div>
                  Starts: {moment(event.date).format("MM.DD.YYYY, LT")} ,
                </div>
                <div>Ends:{moment(event.endTime).format("MM.DD.YYYY, LT")}</div>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch({ type: "INCREMENT" }); // Update the cart count
                console.log("Event added to cart:", event);
              }}
            >
              <AddCircleOutlinedIcon className="add-icon" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
