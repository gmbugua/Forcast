import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import Button from "../Button";
import SearchBar from "./SearchBar";
import styles from "./Search.module.scss";

const HelperText = (props) => {
  if (props.error === "true") {
    return <p className={styles.errorText}>Incorrect Input format.</p>;
  } else if (props.error === "false") {
    return <p className={styles.successText}>Correct Input Format.</p>;
  } else {
    return (
      <p className={styles.helperText}>
        Search by your city's name, spaces are welcome{" "}
        <span role="img" aria-label="winky-face">
          😉
        </span>{" "}
        <br />
        e.g. "Santa Rosa"
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
      cityId: "",
    };
  }

  validate = (event) => {
    let error = "";
    let value = event.target.value;

    if (value.length <= 0) {
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

  focusHandler = (event) => {
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
          placeholder={"Search by City"}
          onChange={this.changeHandler}
          onBlur={this.focusHandler}
        />
        <HelperText error={this.state.error} />
        <Link
          className={cx("link", styles.link_spacing)}
          to={{
            pathname: "/forcast",
            state: {
              city: this.state.query,
            },
          }}>
          <Button className={styles.searchBtn} type="submit" label="search" />
        </Link>
      </form>
    );
  }
}

export default Search;
