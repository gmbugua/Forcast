import React from "react";
import DayCard from "./WeatherForcast/DayCard";
import styles from "./App.module.scss";

export default class App extends React.Component {
  render() {
    return <DayCard day="Wednesday" temperature="120°" />;
  }
}
