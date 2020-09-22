import React from "react";
import PropTypes from "prop-types";
import iconMap, { DefaultIcons } from "../../assets/icons/icon-map";

const Icon = ({ name, main, color, ...rest }) => {
  let Icon = iconMap[main][name];
  if (typeof Icon === "undefined") {
    Icon = DefaultIcons[main].def;
  }
  console.log(Icon);
  return <Icon color={color} {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  main: PropTypes.string,
};

Icon.defaultProps = {
  name: "800",
  main: "Clear",
};

export default Icon;
