import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button";
import SearchBar from "./SearchBar";
import HelperText from "./HelperText";
import styles from "./Search.module.scss";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      city: "",
      countryCode: "",
      error: "true",
      focused: "false",
    };
  }

  validate = (query, city, countryCode, error) => {
    if (query.length <= 0 || countryCode.length !== 2) {
      error = "true";
    } else {
      error = "false";
    }

    return error;
  };

  changeHandler = (event) => {
    let query = event.target.value;
    let [city, countryCode] = query.split(", ");
    countryCode = typeof countryCode === "undefined" ? "" : countryCode;
    this.setState((state) => ({
      query: query,
      city: city,
      countryCode: countryCode,
      error: this.validate(query, city, countryCode, state.error),
    }));
  };

  blurHandler = (event) => {
    this.setState((state) => ({
      focused: "false",
    }));
  };

  focusHandler = (event) => {
    this.setState((state) => ({
      focused: "true",
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" />
        <SearchBar
          name="name"
          error={this.state.error}
          value={this.state.query}
          placeholder={"Edit me!"}
          onChange={this.changeHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />
        <p className={styles.helperText}>
          Search by your City and 2 digit Country Code.
          <br />
          e.g. Santa Rosa, US or London, UK
          <span role="img" aria-label="winky-face">
            😉
          </span>{" "}
          <br />
        </p>
        {this.state.focused === "true" && (
          <HelperText
            error={this.state.error}
            query={this.state.query}
            countryCode={this.state.countryCode}
          />
        )}
        <Link
          className={cx(
            "link",
            styles.link_spacing,
            (this.state.error === "true" || this.state.query === "") &&
              styles.link_disable
          )}
          to={{
            pathname: "/forcast",
            state: {
              id: this.state.city,
              code: this.state.countryCode,
            },
          }}>
          <Button className={styles.searchBtn} type="submit" label="search" />
        </Link>
      </div>
    );
  }
}

export default Search;
