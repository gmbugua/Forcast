import React, { Component } from "react";
import Icon from "../Icon/Icon";
import SearchBar from "./SearchBar";
import Button from "../Button";

import styles from "./Search.module.scss";

export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" size="15em" />
        <SearchBar />
        <Button className={styles.searchBtn} label="search" type="search" />
      </div>
    );
  }
}
