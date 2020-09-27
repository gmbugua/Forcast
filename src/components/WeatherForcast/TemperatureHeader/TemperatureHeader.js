import React from "react";
import PropTypes from "prop-types";

import Icon from "../../Icon";
import styles from "./TemperatureHeader.module.scss";

const TemperatureHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon main={props.main} name={props.iconName} className={styles.icon} />
      </div>
      <div>
        <button>
          <h1>{props.temperature} </h1>
          <h1>°{props.units === "Fahrenheit" ? "F" : "C"} </h1>
        </button>
      </div>
    </div>
  );
};

TemperatureHeader.propTypes = {
  units: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

TemperatureHeader.defaultProps = {
  units: "Fahrenheit",
  iconName: "800",
  main: "clear",
  temperature: 0,
};

export default TemperatureHeader;
