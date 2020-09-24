import React from "react";
import { Line } from "react-chartjs-2";
import { FiveDay } from "../../../utility/sample_api_data";
import PropTypes from "prop-types";

const parseDate = (date) => {
  let parsedDate = date.split(" ");
  return parsedDate;
};

const parseData = (forcastData) => {
  let chartMapping = new Map();

  // Two pass parse
  // First add the dates to the mapping
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[date[0]] = [];
  });

  // Second map relevant chart data objects to those dates
  forcastData.forEach((segment) => {
    let date = parseDate(segment?.dt_txt);
    chartMapping[date[0]].push({ time: date[1], temp: segment?.main.temp });
  });

  return chartMapping;
};

console.log(parseData(FiveDay));

const testData = {
  labels: ["", "9:00", "12:00", "15:00", "18:00", "21:00"],
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
      data: [10, 20, 75, 40, 50, 60],
    },
  ],
};

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

const TemperatureChart = (propds) => {
  return (
    <div>
      <Line data={testData} options={options} height={300} />
    </div>
  );
};

TemperatureChart.propType = {
  data: PropTypes.object.isRequired,
};

TemperatureChart.defaultProps = {
  data: FiveDay,
};

export default TemperatureChart;
