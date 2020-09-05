import React from "react";
import Wrapper from "../Wrapper";
import PropTypes from "prop-types";
import styles from "./WeatherForcast.module.scss";

export default class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast_data: {},
    };
  }

  componentDidMount() {}

  render() {
    return <div></div>;
  }
}
