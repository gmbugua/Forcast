import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

import styles from "./TemperatureChart.module.scss";

const options = {
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  padding: {
    x: 30,
    y: 20,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const TemperatureChart = (props) => {
  let chartData = {
    labels: props.timeLabels,
    datasets: [
      {
        label: "Temperature",

        // line
        borderColor: "rgba(15, 139, 141)",

        // area under line
        fill: true,
        backgroundColor: "rgba(15, 139, 141, .6)",

        // points
        pointBorderColor: "rgb(20, 54, 66)",
        pointBackgroundColor: "rgba(15, 139, 141)",
        hoverBackgroundColor: "rgba(236, 154, 41)",
        pointRadius: 7,

        data: props.data,
      },
    ],
  };
  return (
    <article className={styles.container}>
      <Line data={chartData} options={options} />
    </article>
  );
};

TemperatureChart.propType = {
  data: PropTypes.object.isRequired,
  timeLabels: PropTypes.array.isRequired,
};

TemperatureChart.defaultProps = {
  data: [0, 130, 75, 90, 50, 60, 100],
  timeLabels: ["", "9:00", "12:00", "15:00", "18:00", "21:00"],
};

export default TemperatureChart;
