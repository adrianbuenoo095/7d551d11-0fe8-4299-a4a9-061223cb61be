import { useEffect, useState } from "react";
import "./App.scss";
import SearchAppBar from "./components/SearchAppBar";

interface EventProps {
  _id: string;
  title: string;
  flyerFront: string;
  startTime: string;
  endTime: string;
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
      <div className="Events-galllery">
        {events.map((event) => (
          <div className="event-item" key={event._id}>
            <div>{event.title}</div>
            <img src={event.flyerFront} alt="Event" />
            <div>{event.venue.name}</div>
            <div>{event.startTime}</div>
            <div>{event.endTime}</div>
          </div>
        ))}
      </div>
      {/* <MenuAppBar /> */}
    </div>
  );
}

export default App;
