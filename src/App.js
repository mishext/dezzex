import "./App.css";
import Header from "./Components/Header/Header";
import FirstRow from "./Components/FirstRow/FirstRow";
import SecondRow from "./Components/SecondRow/SecondRow";
import Charts from "./Components/Charts/Charts";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstRow />
      <SecondRow />
      <Charts />
    </div>
  );
}

export default App;
