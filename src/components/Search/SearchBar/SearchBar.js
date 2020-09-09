import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  return <input type="text" className={styles.search} {...props} />;
};

export default SearchBar;
