import axios from "axios";
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
import React, { useEffect, useState } from "react";
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

const DashChart = (props) => {
  const [PieInfo, setPieInfo] = useState([]);

  //force update
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
          props.data +
          "&end_date=" +
          props.data +
          "&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC"
      )
      .then((res) => {
        const data = res.data.near_earth_objects[props.data];

        const Sizes = [];
        for (var i = 0; i < 5; i++) {
          Sizes.push({
            Size:
              (data[i].estimated_diameter.meters.estimated_diameter_min +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2,
            Name: "Object " + [i] + " " + data[i].name,
          });
        }

        console.log(Sizes);

        setPieInfo(Sizes);
      });
  }, []); //only run once

  console.log(PieInfo);

  return (
    <>
      <Pie
        data={{
          labels: PieInfo.map((o) => o.Name),
          datasets: [
            {
              label: "# of Votes",
              data: PieInfo.map((o) => o.Size),
              backgroundColor: [
                "rgba(230, 222, 237, 0.75)",
                "rgba(181, 156, 201, 0.75)",
                "rgba(131, 90, 165, 0.75)",
                "rgba(79, 54, 99, 0.75)",
                "rgba(26, 18, 33, 0.75)",
              ],
              borderColor: [
                "rgba(230, 222, 237,  1)",
                "rgba(181, 156, 201,  1)",
                "rgba(131, 90, 165,  1)",
                "rgba(79, 54, 99,  1)",
                "rgba(26, 18, 33,  1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </>
  );
};

export default DashChart;
