import React from "react";
import Nav from "./Nav";
import PropTypes from "prop-types";
import styles from "./WeatherForcast.module.scss";

export default class WeatherForcast extends React.Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      forcast_data: {},
    };
  }
  componentDidMount() {}

  render() {
    return <Nav />;
  }
}
