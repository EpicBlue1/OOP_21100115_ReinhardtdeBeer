import { faker } from "@faker-js/faker";
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
import AsGraph from "../AstroidGraphs";
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
              borderColor: "rgba(181, 156, 201, 1)",
              backgroundColor: "rgba(181, 156, 201, 0.75)",
            },
            {
              label: secondHalf.map((o) => o.Name),
              data: secondHalf.map((o) => o.Size),
              borderColor: "rgba(131, 90, 165, 1)",
              backgroundColor: "rgba(131, 90, 165, 0.75)",
            },
          ],
        }}
      />
    </>
  );
};

export default barChart;
