import React, { useState, useEffect } from "react";
import Nav from "./Nav";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

const API_KEY = process.env.REACT_APP_WEATHERBIT_KEY;
const WeatherForcast = (props) => {
  const [fetchError, setError] = useState(false);
  const [forcast, setForcast] = useState([]);

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

        let responses = await Promise.all([current, hourly, airQuality]);
        let resp_data = [];

        for (const resp of responses) {
          let resp_json = await resp.json();
          resp_data.push(resp_json);
        }

        return resp_data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchForcast().then((res) => {
      setForcast(res);
    });
  });
  return <Nav />;
};

export default WeatherForcast;
