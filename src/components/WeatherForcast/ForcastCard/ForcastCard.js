import React from "react";
import PropTypes from "prop-types";
import styles from "./ForcastCard.module.scss";

const ForcastCard = (props) => {
  return (
    <div className={styles.list}>
      <div>
        <p>Wind</p>
        <p>{props.wind} mph</p>
      </div>

      <div>
        <p>Humidity</p>
        <p>{props.humidity} %</p>
      </div>

      <div>
        <p>visbility</p>
        <p>{props.visibility / 1000} km</p>
      </div>
    </div>
  );
};

ForcastCard.propTypes = {
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
};

ForcastCard.defaultProps = {
  wind: 2,
  humidity: 2,
  visibility: 93,
};

export default ForcastCard;
