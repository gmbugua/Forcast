import React from "react";
import styles from "./DayCard.module.scss";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

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
        <p className={styles.degrees}>{props.temperature}</p>
      </div>
    </div>
  );
};

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

DayCard.defaultProps = {
  day: "Day",
  temperature: "0°",
};

export default DayCard;
