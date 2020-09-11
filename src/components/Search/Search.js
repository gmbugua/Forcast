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
      error: "",
      city: "",
      countryCode: "",
    };
  }

  validate = (event) => {
    let error = "";
    let query = event.target.value;
    let { city, country } = event.target.value.split(", ");

    if (query.length <= 0) {
      error = "true";
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
    setTimeout(() => {
      this.setState({ error: "", focused: "false" });
    }, 500);
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
          onBlur={this.blurHandler}
        />
        <HelperText error={this.state.error} query={this.state.query} />
        <Link
          className={cx(
            "link",
            styles.link_spacing,
            (this.state.error === "true" ||
              this.state.query === "" ||
              this.state.error === "") &&
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
