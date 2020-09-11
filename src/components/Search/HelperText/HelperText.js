import React from "react";
import PropTypes from "prop-types";
import styles from "./HelperText.module.scss";

const HelperText = (props) => {
  if (props.query === "" && props.error == "true") {
    return <p className={styles.errorText}>Your input is Empty</p>;
  } else if (props.error === "false") {
    return <p className={styles.successText}>Correct Input Format.</p>;
  } else {
    return (
      <p className={styles.helperText}>
        Search by your City and Country <br />
        e.g. Santa Rosa, United States{" "}
        <span role="img" aria-label="winky-face">
          😉
        </span>{" "}
        <br />
      </p>
    );
  }
};

HelperText.propTypes = {
  error: PropTypes.string.isRequired,
  focused: PropTypes.string,
};

export default HelperText;
