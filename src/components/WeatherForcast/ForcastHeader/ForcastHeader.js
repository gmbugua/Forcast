import React from "react";
import PropTypes from "prop-types";
import styles from "./ForcastHeader.module.scss";

const ForcastHeader = (props) => {
  return (
    <div className={styles.container}>
      <h2>
        {props.city}
        {props.state !== "" ? ", " : ""}
        {props.state}
      </h2>
      <p>
        {props.day} {props.time}
      </p>
      <p>{props.forecast}</p>
    </div>
  );
};

ForcastHeader.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  forecast: PropTypes.string.isRequired,
};

ForcastHeader.defaultProps = {
  city: "city",
  state: "",
  day: "Day",
  time: "0:00 a.m.",
  forecast: "Sunny",
};

export default ForcastHeader;
