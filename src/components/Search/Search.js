import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button";
import SearchBar from "./SearchBar";
import styles from "./Search.module.scss";

import cityList from "../../utility/cityList.json";
import countryList from "../../utility/countryList.json";

const cities = [...cityList];
const countries = [...countryList];

const HelperText = (props) => {
  if (props.error === "true") {
    return <p className={styles.errorText}>Incorrect Input format.</p>;
  } else if (props.error === "false") {
    return <p className={styles.successText}>Correct Input Format.</p>;
  } else {
    return (
      <p className={styles.helperText}>
        Search by your City and Country, spaces are welcome{" "}
        <span role="img" aria-label="winky-face">
          😉
        </span>{" "}
        <br />
      </p>
    );
  }
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      error: "",
      cityID: "",
      countryCode: "",
    };
  }

  getCityID = () => {
    let id;
    return [false, id];
  };

  getCountryCode = () => {
    let code;
    return [false, code];
  };

  validate = (event) => {
    let error = "";
    let value = event.target.value;
    let [foundCity, id] = this.getCityID();
    let [foundCountry, code] = this.getCountryCode();

    if (value.length <= 0) {
      if (foundCity && foundCountry) {
        error = "true";
      }
    } else {
      error = "false";
    }

    return error;
  };

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
      error: this.validate(event),
    });
  };

  blurHandler = (event) => {
    this.setState({ error: "" });
  };

  render() {
    return (
      <form className={styles.container}>
        <Icon className={styles.logo} name="Logo" />
        <SearchBar
          name="name"
          error={this.state.error}
          value={this.state.query}
          placeholder={"e.g. Santa Rosa, United States"}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
        />
        <HelperText error={this.state.error} />
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
              id: this.state.cityID,
              code: this.state.countryCode,
            },
          }}>
          <Button className={styles.searchBtn} type="submit" label="search" />
        </Link>
      </form>
    );
  }
}

export default Search;
