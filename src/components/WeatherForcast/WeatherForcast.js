import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import DayCard from "./DayCard";
import TemperatureHeader from "./TemperatureHeader";
import TemperatureChart from "./TemperatureChart";
import ForcastHeader from "./ForcastHeader";
import ForcastCard from "./ForcastCard";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherForcast = (props) => {
  const { city, code } = props.location.state;
  const [fetchError, setError] = useState(false);
  const [forcastData, setData] = useState([]);
  const [units, setUnits] = useState();
  const [currDay, setDay] = useState();

  const fetchForcast = async () => {
    try {
      const currentForcast = fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?q=${city},${code.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`,
          },
        }
      );

      const dailyForcast = fetch(
        `https://community-open-weather-map.p.rapidapi.com/forecast?q=${city},${code.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`,
          },
        }
      );

      const fetchResponses = await Promise.all([currentForcast, dailyForcast]);

      const data = await Promise.all([
        fetchResponses[0].json(),
        fetchResponses[1].json(),
      ]);

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    // fetchForcast();
  }, [city]);

  return (
    <div>
      <Nav />
      <ForcastHeader />
      <ForcastCard />
      <TemperatureHeader />
      <TemperatureChart />
      <div>
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
};

export default WeatherForcast;
