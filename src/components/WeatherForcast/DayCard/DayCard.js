import React from "react";
import PropTypes from "prop-types";

import Icon from "../../Icon/Icon";
import styles from "./DayCard.module.scss";

const DayCard = (props) => {
  return (
    <div className={styles.container}>
      <div className="text-container">
        <p className={styles.day}>{props.day}</p>
      </div>
      <div>
        <Icon
          className={styles.icon}
          name="isolated-thunderstroms"
          size={"5em"}
        />
      </div>
      <div className="text-container">
        <p className={styles.degrees}>
          {props.temperature} °{props.units ? "F" : "C"}
        </p>
      </div>
    </div>
  );
};

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  units: PropTypes.bool.isRequired,
  temperature: PropTypes.number.isRequired,
};

DayCard.defaultProps = {
  day: "Day",
  units: true,
  temperature: 0,
};

export default DayCard;
