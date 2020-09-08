import React from "react";
import { Switch, Route } from "react-router-dom";
// import cityList from "/utility/city.list.json";

// Weather Forcast Imports => WeatherForcast.js
// import Load from "./Load";
import Search from "./Search";
import WeatherForcast from "./WeatherForcast";
// import DayCard from "./WeatherForcast/DayCard";
// import ForcastCard from "./WeatherForcast/ForcastCard";
// import TemperatureHeader from "./WeatherForcast/TemperatureHeader";
// import ForcastHeader from "./WeatherForcast/ForcastHeader";
// import TemperatureChart from "./WeatherForcast/TemperatureChart";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Search />} />
      <Route path="/search" component={Search} />
      <Route exact path="/forcast" component={WeatherForcast} />
    </Switch>
  );
};

export default App;
