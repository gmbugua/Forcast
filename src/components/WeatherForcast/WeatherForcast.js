import React from "react";

// COMPONENTS
import Nav from "./Nav";
import DayCard from "./DayCard";
import Button from "../Button";
import TemperatureHeader from "./TemperatureHeader";
import TemperatureChart from "./TemperatureChart";
import ForcastHeader from "./ForcastHeader";
import ForcastCard from "./ForcastCard";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

import { FiveDay } from "../../utility/sample_api_data";
import DaysOfTheWeek from "../../utility/WeekDays";

const API_KEY = process.env.REACT_APP_API_KEY;

// Format Current Time
const date = new Date();

const formatTimeInstance = (instance) => {
  let s = instance.toString();
  return s.length < 2 ? "0" + s : s;
};

const parseDate = (date) => {
  let parsedDate = date.split(" ");
  return parsedDate;
};

const currDay = `${DaysOfTheWeek[date.getDay()]}`;

const currTime = `${formatTimeInstance(date.getHours())}:${formatTimeInstance(
  date.getMinutes()
)}:${formatTimeInstance(date.getSeconds())}`;

const getDayIndex = (parsedDate) => {
  // extract year,month, day from key
  let splitDate = parsedDate.split("-");

  // create date object
  let tempDay = new Date(splitDate[0], splitDate[1], splitDate[2]);

  // return day index
  return tempDay.getDay();
};

const parseHourlyForcastData = (forcastData) => {
  let chartMapping = {};

  // Two Pass Parse
  // First add the dates to the mapping
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    let dayIndex = getDayIndex(date[0]);
    chartMapping[dayIndex] = {
      times: [],
      temps: [],
      name: DaysOfTheWeek[dayIndex],
    };
  });

  // Second map relevant chart data objects to those dates
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[getDayIndex(date[0])].times.push(date[1]);
    chartMapping[getDayIndex(date[0])].temps.push(segment?.main.temp);
  });

  return chartMapping;
};

const hourlyData = parseHourlyForcastData(FiveDay);

console.log(hourlyData);

// console.log(Object.keys(hourlyData)[0]);
// console.log(Object.values(hourlyData)[0]);

class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDay: 0,
      // data: [],
      data: hourlyData,
      location: this.props.location.state,
      fetchError: false,
      units: "Fahrenheit",
    };
  }

  /* Life Cycle */
  componentDidMount() {
    // this.fetchForcast();
  }

  /* Fetch Forcast Data */
  fetchForcast = async () => {
    let { city, code, zip } = this.state.location;
    try {
      const dailyForcast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},${code}&appid=${API_KEY}&mode=json&units=imperial`
      );

      const data = await dailyForcast.json();

      // console.log(data.list);
      // console.log(parseHourlyForcastData(data.list));
      this.setState({ data: parseHourlyForcastData(data.list) });
      this.setState({ currDay: Object.keys(this.state.data)[0] });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
      this.setState({ fetchError: true });
    }
  };

  /* Handle */
  handleSwitchUnits = () => {
    if (this.state.units === "Fahrenheit") {
      this.setState({ units: "Celcius" });
    } else {
      this.setState({ units: "Fahrenheit" });
    }
  };

  handleCurrentDay = (index) => {
    if (this.state.currDay !== Number.parseInt(index)) {
      this.setState({ currDay: Number.parseInt(index) });
    }
  };

  handleActive = (index) => {
    if (this.state.currDay === Number.parseInt(index)) {
      return true;
    } else {
      return false;
    }
  };

  simulateClick(e) {
    e.click();
  }

  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.content}>
          <div>
            <div>
              <ForcastHeader
                city={`${this.state.location.city}`}
                country={`${this.state.location.zip}`}
                time={currTime}
                day={currDay}
              />
            </div>
            <div>
              <Button
                label={this.state.units === "Fahrenheit" ? "F" : "C"}
                type="toggle"
                onClick={() => this.handleSwitchUnits()}
              />
            </div>
          </div>

          <div>
            <div>
              <TemperatureHeader units={this.state.units} />
            </div>
            <div>
              <ForcastCard />
            </div>
          </div>

          <div>
            <TemperatureChart
              data={Object.values(this.state.data)[this.state.currDay]?.temps}
              timeLabels={
                Object.values(this.state.data)[this.state.currDay]?.times
              }
            />
          </div>

          <div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[0])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[0]);
                }}
                units={this.state.units}
              />
            </div>

            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[1])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[1]);
                }}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[2])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[2]);
                }}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[3])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[3]);
                }}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[4])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[4]);
                }}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[5])
              }>
              <DayCard
                temperature={80}
                day={"Wednesday"}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[5]);
                }}
                units={this.state.units}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForcast;
