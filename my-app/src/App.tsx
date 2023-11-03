import "./App.scss";
import Card from "./components/Card";
import SearchAppBar from "./components/SearchAppBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Card />
    </div>
  );
}

export default App;
