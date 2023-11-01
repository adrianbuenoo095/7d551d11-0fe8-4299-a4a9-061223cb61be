import { useEffect, useState } from "react";
import "./App.scss";
import SearchAppBar from "./components/SearchAppBar";

function App() {
  const [events, setEvents] = useState<string[]>([]);
  const getEvents = async (): Promise<any> => {
    await fetch("https://teclead-ventures.github.io/data/london-events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="App">
      <SearchAppBar />
      <div className="Events-galllery">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <img src={event} alt="Event" />
          </div>
        ))}
      </div>
      {/* <MenuAppBar /> */}
    </div>
  );
}

export default App;
