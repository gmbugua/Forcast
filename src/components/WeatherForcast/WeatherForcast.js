import React, { useState, useEffect } from "react";
import Nav from "./Nav";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

const API_KEY = process.env.REACT_APP_WEATHERBIT_KEY;
const WeatherForcast = (props) => {
  const { fetchError, setError } = useState(false);
  const { current, setCurrentForcast } = useState({});
  const { hourly, setHourlyForcast } = useState({});
  const { airQualtiy, setAirQualityForcast } = useState({});

  useEffect(() => {
    const { city, code } = props.location.state;
    const fetchForcast = async () => {
      try {
        const current = fetch(
          `http://api.weatherbit.io/v2.0/current?city=${city}&country=${code}&key=${API_KEY}`
        );
        const hourly = fetch(
          `http://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&country=${code}&key=${API_KEY}&hours=12`
        );
        const airQuality = fetch(
          `http://api.weatherbit.io/v2.0/current/airquality?city=${city}&country=${code}&key=${API_KEY}`
        );

        const forcast = await Promise.all([current, hourly, airQuality]);
        let forcastData = [];

        for (const resp of forcast) {
          const data = await resp.json();
          forcastData.push(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchForcast();
  });
  return <Nav />;
};

export default WeatherForcast;
