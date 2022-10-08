import axios from "axios";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./AstroidObjects.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//navigation
const Timeline = (props) => {
  const [TimeLineInfo, setTimeLineInfo] = useState([]);

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
        console.log(data);

        // let AsOne = data[2015-09-07]
        const Dates = [];

        for (var i = 0; i < data.length; i++) {
          let DateDat = data[i].close_approach_data[0].close_approach_date_full;
          Dates.push({
            DateNum: parseInt(DateDat.substring(12)),
            Time: DateDat.substring(12),
            Size:
              (data[i].estimated_diameter.meters.estimated_diameter_min +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2,
          });
        }

        const sortedDates = Dates.sort((b, a) => b.DateNum - a.DateNum);

        setTimeLineInfo(sortedDates);
      });
  }, []); //only run once

  console.log(TimeLineInfo);

  let labels = TimeLineInfo;

  return (
    //fragment
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: {},
          title: {
            display: false,
          },
        },
      }}
      data={{
        labels: labels.map((o) => o.Time),
        datasets: [
          {
            label: "5 Near Object Sizes By Time In Meters Today",
            data: labels.map((o) => o.Size),
            borderColor: "rgba(217, 100, 43, 1)",
            backgroundColor: "rgba(217, 100, 43, 0.5)",
          },
        ],
      }}
      height={800}
      width={1200}
    />
  );
};

export default Timeline;
