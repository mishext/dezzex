import "./App.css";
import Header from "./Components/Header/Header";
import FirstRow from "./Components/FirstRow/FirstRow";
import SecondRow from "./Components/SecondRow/SecondRow";
import Calendars from "./Components/Calendar/Calendars";
import ChartsContainer from "./Components/ChartsContainer/ChartsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppContainer">
        <div className="AppComponents">
          <FirstRow />
          <SecondRow />
          <ChartsContainer />
        </div>
        <div className="AppCalendar">
          <Calendars />
        </div>
      </div>
    </div>
  );
}

export default App;
