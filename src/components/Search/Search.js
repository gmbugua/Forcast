import React from "react";
import cx from "classnames";
import Button from "../Button";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

import styles from "./Search.module.scss";

const cityList = require("../../utility/city.list.json");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      cityId: "",
      cities: this.props.cityList,
      validQuery: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ query: event.target.value });
  }

  findCityId() {
    for (const cityObject of cityList) {
      if (cityObject.name === this.state.query) {
        return cityObject.id;
      }
    }
  }

  submitHandler() {
    const errorMessage = this.queryValidation();
  }

  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.logo} name="Logo" size="50vh - 5vh" />
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search by City or Zip Code"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <Link
          className={cx(
            "link",
            styles.link_spacing,
            !this.state.validQuery && styles.link_disable
          )}
          to={{
            pathname: "/forcast",
            state: {
              cityId: this.state.cityId,
            },
          }}>
          <Button label="search" />
        </Link>
      </div>
    );
  }
}

export default Search;
