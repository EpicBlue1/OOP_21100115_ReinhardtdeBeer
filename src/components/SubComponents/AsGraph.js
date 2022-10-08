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
                "rgba(181, 156, 201, 0.75)",
                "rgba(131, 90, 165, 0.75)",
              ],
              borderColor: ["rgba(181, 156, 201, 1)", "rgba(131, 90, 165, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </>
  );
};

export default AsGraphsOne;
