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

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const parseDate = (date) => {
  let parsedDate = date.split(" ");
  return parsedDate;
};

const parseHourlyForcastData = (forcastData) => {
  let chartMapping = {};

  // Two Pass Parse
  // First add the dates to the mapping
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[date[0]] = { times: [], temps: [] };
  });

  // Second map relevant chart data objects to those dates
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[date[0]].times.push(date[1]);
    chartMapping[date[0]].temps.push(segment?.main.temp);
  });

  return chartMapping;
};

const hourlyData = parseHourlyForcastData(FiveDay);
console.log(hourlyData);
console.log(Object.keys(hourlyData));
console.log(Object.values(hourlyData));

class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDay: "",
      data: [],
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
    const { city, code, zip } = this.state.location;

    try {
      const dailyForcast = await fetch(
        `https://community-open-weather-map.p.rapidapi.com/forecast?q=${city},${code.toLowerCase()}&units=imperial&zip=${zip}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`,
          },
        }
      );

      const data = await dailyForcast.json();

      console.log(data);
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
      this.setState({ fetchError: true });
    }
  };

  /* handles */

  handleSwitchUnits = () => {
    if (this.state.units === "Fahrenheit") {
      this.setState({ units: "Celcius" });
      console.log("rerender");
    } else {
      this.setState({ units: "Fahrenheit" });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.content}>
          <div>
            <div>
              <ForcastHeader />
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
            <TemperatureChart />
          </div>

          <div>
            <DayCard
              temperature={80}
              day={"Wednesday"}
              active={true}
              units={this.state.units}
            />
            <DayCard day={"Wednesday"} units={this.state.units} />
            <DayCard day={"Wednesday"} units={this.state.units} />
            <DayCard day={"Wednesday"} units={this.state.units} />
            <DayCard day={"Wednesday"} units={this.state.units} />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForcast;
