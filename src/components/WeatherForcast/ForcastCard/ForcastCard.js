import React from "react";
import PropTypes from "prop-types";

const ForcastCard = (props) => {
  return <div></div>;
};

ForcastCard.propTypes = {
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  precipitation: PropTypes.number.isRequired,
};

ForcastCard.defaultProps = {
  wind: 2,
  humidity: 2,
  precipitation: 93,
};

export default ForcastCard;
