import React, { useState, useEffect } from "react";
import Nav from "./Nav";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

const API_KEY = process.env.REACT_APP_API_KEY;
const WeatherForcast = (props) => {
  const [fetchError, setError] = useState(false);
  const [forcast, setForcast] = useState([]);

  useEffect(() => {
    const { city, code } = props.location.state;
    const fetchForcast = async () => {
      const dailyForcast = fetch(
        "https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%252Cus",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`,
          },
        }
      );
    };

    // fetchForcast();
  });
  return <Nav />;
};

export default WeatherForcast;
