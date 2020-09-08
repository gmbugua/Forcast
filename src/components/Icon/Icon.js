import React from "react";
import PropTypes from "prop-types";
import iconMap from "../../assets/icons/icon-map";

const Icon = ({ name, size, color, fixSize, ...rest }) => {
  const Icon = iconMap[name];
  return <Icon color={color} {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Icon;
