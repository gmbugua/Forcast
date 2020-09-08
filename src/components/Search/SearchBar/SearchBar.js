import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      placeholder="Search by City or Zip Code"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default SearchBar;
