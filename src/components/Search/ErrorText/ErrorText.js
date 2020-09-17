import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorText.module.scss";

const ErrorText = (props) => {
  if (props.query === "" && props.error === true) {
    return <p className={styles.errorText}>Your input is Empty</p>;
  } else if (props.countryCode.length !== 2 && props.error === true) {
    return (
      <p className={styles.errorText}>
        The country code you entered has more or less digits than required.
        <br />
        e.g. Country Code "US" for United States of America
      </p>
    );
  } else if (props.foundCode === false && props.error === true) {
    return (
      <p className={styles.errorText}>
        The country code you entered is not valid. <br /> Double check that it
        is correct.
      </p>
    );
  } else if (props.error === false) {
    return <p className={styles.successText}>Correct Input Format.</p>;
  }
};

ErrorText.propTypes = {
  countryCode: PropTypes.string,
  foundCode: PropTypes.bool,
  error: PropTypes.bool,
};

export default ErrorText;
