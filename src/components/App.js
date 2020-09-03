import React from "react";

// Weather Forcast Imports => WeatherForcast.js
import TemperatureHeader from "./WeatherForcast/TemperatureHeader";
import DayCard from "./WeatherForcast/DayCard/DayCard";
import ForcastCard from "./WeatherForcast/ForcastCard/ForcastCard";
import ForcastHeader from "./WeatherForcast/ForcastHeader/ForcastHeader";

export default class App extends React.Component {
  render() {
    return <TemperatureHeader />;
  }
}
