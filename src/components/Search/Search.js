import React from "react";

import Icon from "../Icon/Icon";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

import styles from "./Search.module.scss";

export default class Search extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" size="50vh - 5vh" />
        <SearchBar />
        <SearchBtn route="/forcast" />
      </div>
    );
  }
}
