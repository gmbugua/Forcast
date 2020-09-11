import React from "react";
import PropTypes from "prop-types";
import styles from "./HelperText.module.scss";

const HelperText = (props) => {
  if (props.error === "Not Found" && props.query.length <= 0) {
    return <p className={styles.errorText}>Your input is Empty</p>;
  } else if (props.error === "Not Found") {
    return (
      <p className={styles.errorText}>
        The City and Country you entered were not found! <br />
        Please try again using the following format: "City, Country"
      </p>
    );
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
  query: PropTypes.string.isRequired,
};

export default HelperText;
