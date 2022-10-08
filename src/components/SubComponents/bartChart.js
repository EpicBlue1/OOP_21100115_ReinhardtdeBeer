import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import "./AstroidObjects.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barChart = (props) => {
  if (props.data === undefined) {
    return <div className="Loading">Loading...</div>;
  }
  const labels = ["Size"];

  console.log(props.data);
  let TwoObjects = props.data;
  const firstHalf = TwoObjects.slice(0, 1);
  const secondHalf = TwoObjects.slice(-1);

  console.log(firstHalf);

  return (
    <>
      <Bar
        options={{
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {},
            title: {
              display: true,
              text: "Chart.js Horizontal Bar Chart",
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: firstHalf.map((o) => o.Name),
              data: firstHalf.map((o) => o.Size),
              borderColor: "rgba23, 56, 89, 0)",
              backgroundColor: "rgba(23, 56, 89, 0.75)",
            },
            {
              label: secondHalf.map((o) => o.Name),
              data: secondHalf.map((o) => o.Size),
              borderColor: "rgba(31, 89, 141, 0)",
              backgroundColor: "rgba(31, 89, 141, 0.75)",
            },
          ],
        }}
      />
    </>
  );
};

export default barChart;
