import React from "react";
import PropTypes from "prop-types";

import Icon from "../../Icon/Icon";
import styles from "./TemperatureHeader.module.scss";
import { useWindowSize } from "../../../utility/Hooks";

const TemperatureHeader = (props) => {
  const { width } = useWindowSize();
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon name={props.iconName} size={width < 542 ? 125 : 200} />
      </div>
      <div>
        <button>
          <h1>{props.temperature} </h1>
          <h1>°{props.units === "Fahreneit" ? "F" : "C"} </h1>
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
  units: "Fahreneit",
  iconName: "sunny",
  temperature: 0,
};

export default TemperatureHeader;
