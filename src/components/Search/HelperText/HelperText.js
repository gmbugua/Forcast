import React from "react";
import PropTypes from "prop-types";
import styles from "./HelperText.module.scss";

const HelperText = (props) => {
  if (props.query === "" && props.error === "true") {
    return <p className={styles.errorText}>Your input is Empty</p>;
  } else if (props.countryCode.length !== 2 && props.error === "true") {
    return (
      <p className={styles.errorText}>
        The country code you entered has more or less digits than required.
        <br />
        e.g. Country Code "US" for United States of America
      </p>
    );
  } else if (props.error === "false") {
    return <p className={styles.successText}>Correct Input Format.</p>;
  }
};

HelperText.propTypes = {
  error: PropTypes.string.isRequired,
  countryCode: PropTypes.string,
};

export default HelperText;
