import "./App.scss";
import Card from "./components/Card";
import SearchAppBar from "./components/SearchAppBar";
import { SearchProvider } from "./components/context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <SearchAppBar />
        <Card />
      </SearchProvider>
    </div>
  );
}

export default App;
