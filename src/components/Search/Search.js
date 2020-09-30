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

const validateZip = (key) => {
  const numbers = /^[0-9]+$/;

  if (key.length < 5 || key.match(numbers) === null) {
    return false;
  }

  return true;
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      city: "",
      countryCode: "",
      zipCode: "",
      focused: false,
      error: true,
      foundCode: false,
      validZip: false,
    };
  }

  validate = (query, countryCode, codeFound, validZip, error) => {
    if (
      query.length <= 0 ||
      countryCode.length !== 2 ||
      codeFound === false ||
      validZip === false
    ) {
      error = true;
    } else {
      error = false;
    }

    return error;
  };

  changeHandler = (event) => {
    let query = event.target.value;

    let [city, countryCode, zipCode] = query.split(", ");
    console.log(
      `city: ${city} countryCode: ${countryCode} zipCode: ${zipCode}`
    );
    countryCode = typeof countryCode === "undefined" ? "" : countryCode;
    console.log(countryCode.indexOf(","));
    zipCode = typeof zipCode === "undefined" ? "" : zipCode;

    let findCode = findCountry(countryCode);
    let zipValidated = validateZip(zipCode);

    this.setState((state) => ({
      query: query,
      city: city,
      countryCode: countryCode,
      zipCode: zipCode,
      foundCode: findCode,
      validZip: zipValidated,
      error: this.validate(
        query,
        countryCode,
        findCode,
        zipValidated,
        state.error
      ),
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
        <div className={styles.content}>
          <Icon className={styles.logo} name="logo" main="misc" />

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
              countryCode={this.state.countryCode}
              error={this.state.error}
              foundCode={this.state.foundCode}
              query={this.state.query}
              validZip={this.state.validZip}
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
                zip: this.state.zipCode,
              },
            }}>
            <Button className={styles.searchBtn} type="submit" label="search" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
