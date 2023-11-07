import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./context/SearchContext";

interface EventProps {
  id: string;
  title: string;
  flyerFront: string;
  startTime: string;
  endTime: string;
  userProfile: string;
  venue: {
    id: string;
    name: string;
  };
}

const Card = () => {
  const { searchQuery } = useContext(SearchContext);
  const [events, setEvents] = useState<EventProps[]>([]);
  const [originalEvents, setOriganalEvents] = useState<EventProps[]>([]);

  const getEvents = async (): Promise<any> => {
    return await fetch(
      "https://teclead-ventures.github.io/data/london-events.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setOriganalEvents(data);
        setEvents(data);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = originalEvents.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setEvents(filteredEvents);
  }, [searchQuery, originalEvents]);

  return (
    <div className="events-gallery">
      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <div className="user-profile">
            <img src={event.userProfile} alt="User" />
            <span>{event.title}</span>
          </div>
          <div className="event-image-container">
            <img className="event-image" src={event.flyerFront} alt="images" />
          </div>
          <div className="event-details">
            <div className="event-location">
              <div>
                <LocationOnIcon />
              </div>
              <div>{event.venue.name}</div>
            </div>
            <div className="event-date">
              <div>{event.startTime}</div>
              <div>{event.endTime}</div>
            </div>
          </div>
          <AddCircleOutlinedIcon className="add-icon" />
        </div>
      ))}
    </div>
  );
};

export default Card;
