import React from "react";
import PropTypes from "prop-types";

import Icon from "../../Icon/";
import styles from "./DayCard.module.scss";

const DayCard = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.day}>{props.day}</p>
      </div>
      <div>
        <Icon className={styles.icon} name={props.iconName} main={props.main} />
      </div>
      <div>
        <p className={styles.degrees}>
          {props.temperature} °{props.units === "Fahreneit" ? "F" : "C"}
        </p>
      </div>
    </div>
  );
};

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

DayCard.defaultProps = {
  day: "Day",
  iconName: "800",
  main: "clear",
  units: "Fahreneit",
  temperature: 0,
};

export default DayCard;
