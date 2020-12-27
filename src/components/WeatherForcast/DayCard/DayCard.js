import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../../Icon/";
import styles from "./DayCard.module.scss";

const DayCard = (props) => {

  return (
    <div
      className={cx(
        styles.container,
        styles[props.active() === true ? "active" : "inactive"]
      )}
      ref={props.forwardRef}
      >
      <div>
        <p className={styles.day}>{props.day}</p>
      </div>
      <div>
        <Icon className={styles.icon} name={props.iconName} main={props.main} />
      </div>
      <div>
        <p className={styles.degrees}>
          {props.temperature} °{props.units === "Fahrenheit" ? "F" : "C"}
        </p>
      </div>
    </div>
  );
};

DayCard.propTypes = {
  active: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

DayCard.defaultProps = {
  active: () => {},
  day: "Day",
  iconName: "800",
  main: "clear",
  units: "Fahrenheit",
  temperature: 0,
};

export default DayCard;
