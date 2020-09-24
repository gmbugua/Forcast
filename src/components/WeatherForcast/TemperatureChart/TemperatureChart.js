import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: true,
        },
      },
    ],
  },
};

const TemperatureChart = (props) => {
  const chartData = {
    labels: props.timeLabels,
    height: 100,
    datasets: [
      {
        label: "temp",
        fill: true,
        backgroundColor: "rgba(236, 154, 41, .6)",
        pointBackgroundColor: "rgba(15, 139, 141)",
        hoverBackgroundColor: "rgba(236, 154, 41)",
        pointBorderColor: "rgb(20, 54, 66)",
        pointRadius: 7,
        data: props.data,
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} options={options} height={300} />
    </div>
  );
};

TemperatureChart.propType = {
  data: PropTypes.object.isRequired,
  timeLabels: PropTypes.array.isRequired,
};

TemperatureChart.defaultProps = {
  data: [10, 20, 75, 40, 50, 60],
  timeLabels: ["", "9:00", "12:00", "15:00", "18:00", "21:00"],
};

export default TemperatureChart;
