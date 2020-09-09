import React from "react";
import cx from "classnames";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

import styles from "./Search.module.scss";

const cities_file = require("../../utility/city.list.json");
const cities = [...cities_file];

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      city: {},
      error: false,
      query: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ query: event.target.value });
  }

  findCity() {
    console.log(cities);
  }

  submitHandler(event) {
    this.findCity();
    // event.preventDefault(); will stop navigation
  }

  render() {
    return (
      <form className={styles.container}>
        <Icon className={styles.logo} name="Logo" size="50vh - 5vh" />
        <SearchBar
          name="name"
          value={this.state.query}
          placeholder={"Search by City or Zip Code"}
          onChange={this.changeHandler}
        />
        <Link
          className={cx("link", styles.link_spacing)}
          to={{
            pathname: "/forcast",
            state: {
              city: this.state.city,
            },
          }}
          onClick={this.submitHandler}>
          <input className={styles.searchBtn} type="submit" value="Search" />
        </Link>
      </form>
    );
  }
}

export default Search;
