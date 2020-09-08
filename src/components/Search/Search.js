import React from "react";

import Icon from "../Icon/Icon";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

import styles from "./Search.module.scss";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" size="50vh - 5vh" />
        <SearchBar value={this.state.value} onChange={this.handleChange} />
        <SearchBtn route="/forcast" searchQuery={this.state.query} />
      </div>
    );
  }
}

export default Search;
