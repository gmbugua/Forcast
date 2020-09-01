import React from "react";
import styles from "./DayCard.module.scss";
import { ReactComponent as WeatherIcon } from "../../../assets/weatherIcons/clear-cloudy.svg";

function DayCard(props) {
  const day = props.day || "Day";
  const degrees = props.temperature || "N/A°";
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.day}>{day}</p>
      </div>
      <div>
        <WeatherIcon />
      </div>
      <div>
        <p className={styles.degrees}>{degrees}</p>
      </div>
    </div>
  );
}

export default DayCard;
