import React from "react";
import PropTypes from "prop-types";
import styles from "./ForcastHeader.module.scss";

const ForcastHeader = (props) => {
  return (
    <div className={styles.container}>
      <h1>
        {props.city}
        {props.country !== "" ? ", " : ""}
        {props.country}
      </h1>
      <p>
        {props.day} {props.time}
      </p>
      <p>{props.desc}</p>
    </div>
  );
};

ForcastHeader.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

ForcastHeader.defaultProps = {
  city: "city",
  country: "",
  day: "Day",
  time: "0:00 a.m.",
  desc: "sunny",
};

export default ForcastHeader;
