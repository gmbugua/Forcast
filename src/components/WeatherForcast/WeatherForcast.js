import React from "react";
import Nav from "./Nav";

// eslint-disable-next-line
import styles from "./WeatherForcast.module.scss";

export default class WeatherForcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast_data: {},
    };
  }
  componentDidMount() {
    // eslint-disable-next-line
    const location = this.props.location.state;
    console.log(location);
  }

  render() {
    return <Nav />;
  }
}
