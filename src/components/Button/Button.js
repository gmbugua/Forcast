import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import cx from "classnames";

const Button = (props) => {
  return (
    <button className={cx(styles.btn, styles[props.type])}>
      <p>{props.label}</p>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: "button",
  type: "",
};

export default Button;
