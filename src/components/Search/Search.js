import React, { Component } from "react";
import Icon from "../Icon/Icon";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";
import PropTypes from "prop-types";

import styles from "./Search.module.scss";

export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <Icon className={styles.logo} name="Logo" size="12em" />
        </div>
        <div>
          <SearchBar />
          <SearchBtn />
        </div>
      </div>
    );
  }
}
