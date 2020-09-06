import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Weather Forcast Imports => WeatherForcast.js
// import Load from "./Load";
import Search from "./Search";
import WeatherForcast from "./WeatherForcast";
// import DayCard from "./WeatherForcast/DayCard";
// import ForcastCard from "./WeatherForcast/ForcastCard";
// import TemperatureHeader from "./WeatherForcast/TemperatureHeader";
// import ForcastHeader from "./WeatherForcast/ForcastHeader";
// import TemperatureChart from "./WeatherForcast/TemperatureChart";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route default path="/search" component={Search} />
          <Route path="/forcast" component={WeatherForcast} />
        </Switch>
      </Router>
    );
  }
}
