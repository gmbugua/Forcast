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

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "85e0f16b7a77d3633ed4216933891421";

// Format Current Time
const date = new Date();

let upCase = (str) => {
  let newStr = "";
  let parsedStr = str.split(" ")

  parsedStr.forEach((str) => {
    const upper = str.replace(/(^\w)+/, (chr) => {
      return chr.toUpperCase();
    });
    newStr = newStr.concat(upper + ' ')
  })

  return newStr.trim();
};

const formatTimeInstance = (instance) => {
  let s = instance.toString();
  return s.length < 2 ? "0" + s : s;
};

const parseDate = (date) => {
  let parsedDate = date.split(" ");
  return parsedDate;
};

const currentDay = `${DaysOfTheWeek[date.getDay()]}`;

const currentTime = `${formatTimeInstance(
  date.getHours()
)}:${formatTimeInstance(date.getMinutes())}:${formatTimeInstance(
  date.getSeconds()
)}`;

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
      id: `${segment?.weather[0]?.id}`,
      wind: segment?.wind?.speed,
      name: DaysOfTheWeek[dayIndex],
      main: segment?.weather[0]?.main,
      humidity: segment?.main?.humidity,
      visibility: segment?.visibility,
      desc: upCase(segment?.weather[0]?.description),
      times: [],
      temps: [],
    };

    // console.log(segment)
  });

  // Second map relevant chart data objects to those dates
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[getDayIndex(date[0])].times.push(date[1]);
    chartMapping[getDayIndex(date[0])].temps.push(segment?.main.temp);
  });

  // console.log(chartMapping)

  return chartMapping;
};

const hourlyData = parseHourlyForcastData(FiveDay);

// console.log(hourlyData);
// console.log(Object.keys(hourlyData)[0]);
// console.log(Object.values(hourlyData)[0]);

class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDay: date.getDay(),
      data: hourlyData,
      location: this.props.location.state,
      fetchError: false,
      units: "Fahrenheit",
    };
  }

  /* Life Cycle */
  componentDidMount() {
    this.fetchForcast();
  }

  /* Fetch Forcast Data */
  fetchForcast = async () => {
    let { code, zip } = this.state.location;
    try {
      const dailyForcast = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},${code}&appid=${API_KEY}&mode=json&units=imperial`
      );

      const data = await dailyForcast.json();

      // console.log(data.list);
      // console.log(parseHourlyForcastData(data.list));
      let datum = parseHourlyForcastData(data.list)
      // console.log(datum)
      this.setState({ data: datum });
      // this.setState({ currDay: Object.keys(this.state.data)[0] });
      // console.log(this.state.data);
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

  currTemp = (index) => {
    index = `${Number.parseInt(index)}`;
    let temps = this.state.data[index].temps;
    // console.log(temps)
    let sum = 0;
    temps.forEach((elm) => {
      sum += elm;
    });
    return Math.floor(sum / temps.length);
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
                day={currentDay}
                time={currentTime}
                city={`${this.state.location.city}`}
                country={`${this.state.location.zip}`}
                desc={this.state.data[this.state.currDay]?.desc}
              />
            </div>
            <div>
              <Button
                type="toggle"
                onClick={() => this.handleSwitchUnits()}
                label={this.state.units === "Fahrenheit" ? "F" : "C"}
              />
            </div>
          </div>

          <div>
            <div>
              <TemperatureHeader
                units={this.state.units}
                main={(this.state.data[this.state.currDay]?.main).toLowerCase()}
                temperature={this.currTemp(this.state.currDay)}
                iconName={`${this.state.data[this.state.currDay]?.id}`}
              />
            </div>
            <div>
              <ForcastCard 
                wind={this.state.data[this.state.currDay]?.wind}
                humidity={this.state.data[this.state.currDay]?.humidity}
                visibility={this.state.data[this.state.currDay]?.visibility}
              />
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
                temperature={this.currTemp(Object.keys(this.state.data)[0])}
                day={this.state.data[Object.keys(this.state.data)[0]]?.name}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[0]);
                }}
                iconName={this.state.data[Object.keys(this.state.data)[0]]?.id}
                units={this.state.units}
                main={(this.state.data[
                  Object.keys(this.state.data)[0]
                ]?.main).toLowerCase()}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[1])
              }>
              <DayCard
                temperature={this.currTemp(Object.keys(this.state.data)[1])}
                day={this.state.data[Object.keys(this.state.data)[1]]?.name}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[1]);
                }}
                iconName={this.state.data[Object.keys(this.state.data)[1]]?.id}
                main={(this.state.data[
                  Object.keys(this.state.data)[1]
                ]?.main).toLowerCase()}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[2])
              }>
              <DayCard
                temperature={this.currTemp(Object.keys(this.state.data)[2])}
                day={this.state.data[Object.keys(this.state.data)[2]]?.name}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[2]);
                }}
                iconName={this.state.data[Object.keys(this.state.data)[2]]?.id}
                main={(this.state.data[
                  Object.keys(this.state.data)[2]
                ]?.main).toLowerCase()}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[3])
              }>
              <DayCard
                temperature={this.currTemp(Object.keys(this.state.data)[3])}
                day={this.state.data[Object.keys(this.state.data)[3]]?.name}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[3]);
                }}
                iconName={this.state.data[Object.keys(this.state.data)[3]]?.id}
                main={(this.state.data[
                  Object.keys(this.state.data)[3]
                ]?.main).toLowerCase()}
                units={this.state.units}
              />
            </div>
            <div
              onClick={() =>
                this.handleCurrentDay(Object.keys(this.state.data)[4])
              }>
              <DayCard
                temperature={this.currTemp(Object.keys(this.state.data)[4])}
                day={this.state.data[Object.keys(this.state.data)[4]]?.name}
                active={() => {
                  return this.handleActive(Object.keys(this.state.data)[4]);
                }}
                iconName={this.state.data[Object.keys(this.state.data)[4]]?.id}
                main={(this.state.data[
                  Object.keys(this.state.data)[4]
                ]?.main).toLowerCase()}
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
