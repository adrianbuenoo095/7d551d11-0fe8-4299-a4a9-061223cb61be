import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import "./App.scss";
import SearchAppBar from "./components/SearchAppBar";

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

function App() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const getEvents = async (): Promise<any> => {
    return await fetch(
      "https://teclead-ventures.github.io/data/london-events.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="App">
      <SearchAppBar />
      <div className="events-gallery">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="user-profile">
              <img src={event.userProfile} alt="User" />
              <span>{event.title}</span>
            </div>
            <div className="event-image-container">
              <img
                className="event-image"
                src={event.flyerFront}
                alt="images"
              />
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
    </div>
  );
}

export default App;
