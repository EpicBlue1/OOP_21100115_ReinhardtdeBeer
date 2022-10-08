import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import "./AstroidObjects.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend
);

const AsGraphsOne = (props) => {
  if (props.data === undefined) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <>
      <Pie
        data={{
          labels: props.data.map((o) => o.Name),
          datasets: [
            {
              label: "# of Votes",
              data: props.data.map((o) => o.Size),
              backgroundColor: [
                "rgba(31, 89, 141, 0.75)",
                "rgba(23, 56, 89, 0.75)",
              ],
              borderColor: ["rgba(31, 89, 141, 0)", "rgba(31, 89, 141, 0)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </>
  );
};

export default AsGraphsOne;
