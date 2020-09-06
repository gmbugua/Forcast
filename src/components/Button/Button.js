import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={styles.btn}>
      <p>{props.label}</p>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: "button",
};

export default Button;
