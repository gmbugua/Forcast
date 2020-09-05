import React from "react";

// Weather Forcast Imports => WeatherForcast.js
// import Load from "./Load/Load";
// import DayCard from "./WeatherForcast/DayCard";
// import ForcastCard from "./WeatherForcast/ForcastCard";
// import TemperatureHeader from "./WeatherForcast/TemperatureHeader";
// import ForcastHeader from "./WeatherForcast/ForcastHeader";
// import TemperatureChart from "./WeatherForcast/TemperatureChart";
import WeatherForcast from "./WeatherForcast";

export default class App extends React.Component {
  render() {
    return <WeatherForcast />;
  }
}
