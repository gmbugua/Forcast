import React from "react";
import Nav from "./Nav";
import PropTypes from "prop-types";
import styles from "./WeatherForcast.module.scss";

export default class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast_data: {},
    };
  }
  componentDidMount() {
    const location = this.props.location.state;
    console.log(location);
  }

  render() {
    return <Nav />;
  }
}
