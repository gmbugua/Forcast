import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button";
import SearchBar from "./SearchBar";
import ErrorText from "./ErrorText";
import styles from "./Search.module.scss";

import countries from "../../utility/country_codes.json";

const findCountry = (key) => {
  for (const country in countries) {
    if (country === key) {
      return true;
    }
  }
  return false;
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      city: "",
      countryCode: "",
      error: true,
      focused: false,
      foundCode: false,
    };
  }

  validate = (query, countryCode, codeFound, error) => {
    if (query.length <= 0 || countryCode.length !== 2 || codeFound === false) {
      error = true;
    } else {
      error = false;
    }

    return error;
  };

  changeHandler = (event) => {
    let query = event.target.value;

    let [city, countryCode] = query.split(", ");
    countryCode = typeof countryCode === "undefined" ? "" : countryCode;

    let findCode = findCountry(countryCode);

    this.setState((state) => ({
      query: query,
      city: city,
      countryCode: countryCode,
      foundCode: findCode,
      error: this.validate(query, countryCode, findCode, state.error),
    }));
  };

  blurHandler = (event) => {
    this.setState((state) => ({
      focused: false,
    }));
  };

  focusHandler = (event) => {
    this.setState((state) => ({
      focused: true,
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" />

        <SearchBar
          name="name"
          error={this.state.error.toString()}
          value={this.state.query}
          placeholder={"Edit me!"}
          onChange={this.changeHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />

        <p className={styles.helperText}>
          Search by your City and 2 digit Country Code.
          <br />
          e.g. Santa Rosa, US or London, GB{" "}
          <span role="img" aria-label="winky-face">
            😉
          </span>{" "}
          <br />
        </p>

        {this.state.focused === true && (
          <ErrorText
            error={this.state.error}
            foundCode={this.state.foundCode}
            query={this.state.query}
            countryCode={this.state.countryCode}
          />
        )}

        <Link
          className={cx(
            "link",
            styles.link_spacing,
            this.state.error === true && styles.link_disable
          )}
          to={{
            pathname: "/forcast",
            state: {
              city: this.state.city,
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
