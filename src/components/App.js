import React from "react";

// Weather Forcast Imports => WeatherForcast.js
import Load from "./Load/Load";
import DayCard from "./WeatherForcast/DayCard";
import ForcastCard from "./WeatherForcast/ForcastCard";
import TemperatureHeader from "./WeatherForcast/TemperatureHeader";
import ForcastHeader from "./WeatherForcast/ForcastHeader";

export default class App extends React.Component {
  render() {
    return <Load />;
  }
}
