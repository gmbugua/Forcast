import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button";
import SearchBar from "./SearchBar";
import HelperText from "./HelperText";
import styles from "./Search.module.scss";

import cityList from "../../utility/cityList.json";
import countryList from "../../utility/countryList.json";

const cities = [...cityList];
const countries = [...countryList];
let getCityID = (query) => {
  let id;
  return [false, id];
};

let getCountryCode = () => {
  let code;
  return [false, code];
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

  validate = (event) => {
    let error = "";
    let value = event.target.value;
    let [foundCity, id] = getCityID();
    let [foundCountry, code] = getCountryCode();

    if (foundCity === false && foundCountry === false) {
      error = "Not Found";
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
          placeholder={"Edit me!"}
          onChange={this.changeHandler}
          onBlur={this.blurHandler}
        />
        <HelperText error={this.state.error} query={this.state.query} />
        <Link
          className={cx(
            "link",
            styles.link_spacing,
            (this.state.error === "true" ||
              this.state.query === "" ||
              this.state.error === "Not Found" ||
              this.state.error === "") &&
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
