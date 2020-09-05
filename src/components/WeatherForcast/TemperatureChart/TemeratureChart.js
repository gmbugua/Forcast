import React from "react";
import { Line } from "react-chartjs-2";

const testData = {
  labels: [
    "",
    "Tue",
    "Thur",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      fill: false,
      backgroundColor: "#ec9a29",
      borderColor: "#0f8b8d",
      pointBorderColor: "#ec9a29",
      pointRadius: 5,
      data: [100, 200, 300, 400, 200, 300, 600, 800, 500, 400, 500, 800],
    },
  ],
};

const TemeratureChart = (props) => {
  return (
    <div>
      <Line data={testData} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default TemeratureChart;
