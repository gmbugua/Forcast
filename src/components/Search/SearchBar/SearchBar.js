import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      className={cx(
        styles.search,
        (props.error === "true" ||
          props.value === "" ||
          props.error === "Not Found" ||
          props.error === "") &&
          styles.errorBar,
        props.error === "false" && styles.successBar
      )}
      {...props}
    />
  );
};

SearchBar.propTypes = {
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
