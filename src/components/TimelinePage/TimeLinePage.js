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
import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Line } from "react-chartjs-2";
import "../SubComponents/AstroidObjects.css";
import "./Timelines.scss";

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
const TimelinePage = () => {
  const [TomorrowDat, setTommorowDat] = useState([]);
  const [LineData, setLineData] = useState();
  const [LabelInfo, setLabelInfo] = useState();
  const [SelDesc, setSelDesc] = useState(
    "Loading... Wait for this to change before you can make a selection"
  );

  const selVal = useRef("Size");

  let lineProp = TomorrowDat.map((o) => o.Size);
  let labelData = "Loading...";
  let Description = "Choose an Option Above";

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC"
      )
      .then((res) => {
        let date = new Date();

        let Day = date.getDate() + 1; //tomorrows date
        let Month = date.getMonth() + 1;
        let Year = date.getFullYear();

        if (Day > 28) {
          Month = Month + 1;
          Day = 1;
        }
        if (Month < 10) {
          Month = "0" + Month;
        }
        if (Day < 10) {
          Day = "0" + Day;
        }

        Day = Day.toString();
        Month = Month.toString();
        Year = Year.toString();

        let DateFull = Year + "-" + Month + "-" + Day;
        console.log(DateFull);
        const data = res.data.near_earth_objects[DateFull];

        console.log(data);

        const Tomorrow = [];

        for (let i = 0; i < data.length; i++) {
          let DateDat = data[i].close_approach_data[0].close_approach_date_full;
          Tomorrow.push({
            Size:
              (data[i].estimated_diameter.meters.estimated_diameter_min +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2,
            MissDistance:
              data[i].close_approach_data[0].miss_distance.kilometers,
            MissDistanceLunar:
              data[i].close_approach_data[0].miss_distance.lunar,
            Velocity:
              data[i].close_approach_data[0].relative_velocity
                .kilometers_per_hour,
            Magnitude: data[i].absolute_magnitude_h,
            TimeNum: parseInt(DateDat.substring(12)),
            Time: DateDat.substring(12),
          });
        }

        const sortedTomorrow = Tomorrow.sort((b, a) => b.TimeNum - a.TimeNum);

        setTommorowDat(sortedTomorrow);

        if (TomorrowDat.length === 0) {
          console.log("Not Loaded yet");
          Description = "You can make a selection";
          setSelDesc(Description);
        } else {
          console.log("All good");
          setSelDesc(Description);
        } //check if data has been loaded yet.
      });
  }, []); //only run once

  const updateProperties = () => {
    let selection = selVal.current.value;
    console.log(selection);
    if (selection === "MissDistance") {
      lineProp = TomorrowDat.map((o) => o.MissDistance);
      labelData = "Tomorrows predicted Miss Distances in Km";
      Description =
        "The Miss Distances are represented in km. Each point on the graph represents a particular asteroid and its corresponding Miss Distance towards earth for that timestamp.";
    } else if (selection === "Size") {
      lineProp = TomorrowDat.map((o) => o.Size);
      labelData = "Tomorrows predicted Asteroid Sizes in m";
      Description =
        "The Asteroid sizes are represented in meters. Each point on the graph represents a particular asteroid and its corresponding Size for that timestamp.";
    } else if (selection === "Velocity") {
      lineProp = TomorrowDat.map((o) => o.Velocity);
      labelData = "Tomorrows predicted velocities Km/h";
      Description =
        "The Asteroid velocity are represented in Km/h. Velocity is defined as the speed of an object in a certain direction. Each point on the graph represents a particular asteroid and its corresponding Size for that timestamp.";
    } else if (selection === "Magnitude") {
      lineProp = TomorrowDat.map((o) => o.Magnitude);
      labelData = "Tomorrows predicted Magnitude";
      Description =
        "The Asteroids magnitude. Magnitude expresses the size or scope of something. In general, magnitude in physics refers to distance or amount. Each point on the graph represents a particular asteroid and its corresponding magnitude for that timestamp.";
    } else if (selection === "MissDistanceLunar") {
      lineProp = TomorrowDat.map((o) => o.MissDistanceLunar);
      labelData = "Tomorrows predicted Miss Distance in Lunar";
      Description =
        "Miss Distance in Lunar. Lunar distance is approximately 400,000km, 1.28 light-seconds, or thirty times Earth's diameter. Each point on the graph displays a different asteroid and their respected Miss Distance in Lunar.";
    }

    setLineData(lineProp);
    setLabelInfo(labelData);
    setSelDesc(Description);
  };

  return (
    //fragment
    <>
      <Row className="TimelineHead">
        <h1 className="Heading">Timeline</h1>
        <div className="Description">
          <p>
            Welcome to the near earth objects Timeline of tomorrow. Given in
            timestamps of predicted orbits and misses. Choose a property from
            the dropdown to to display Size, Velocity, Miss Distance, Miss
            Distance in Lunar or Magnitude on the timeline
          </p>
        </div>
      </Row>
      <Row className="TimelineContent">
        <Col className="col-8 TimelineCol">
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {},
                title: {
                  display: true,
                },
              },
            }}
            data={{
              labels: TomorrowDat.map((o) => o.Time),
              datasets: [
                {
                  label: LabelInfo,
                  data: LineData,
                  borderColor: "rgba(217, 100, 43, 1)",
                  backgroundColor: "rgba(217, 100, 43, 0.5)",
                },
              ],
            }}
            height={800}
            width={1200}
          />
        </Col>
        <Col className="col-4 TimelineDesc">
          <h2>Select Property</h2>

          <select className="ObjDrop" onChange={updateProperties} ref={selVal}>
            <option value="Size">Size</option>
            <option value="MissDistance">Miss Distance</option>
            <option value="Velocity">Velocity</option>
            <option value="Magnitude">Magnitude</option>
            <option value="MissDistanceLunar">MissDistanceLunar</option>
          </select>
          <div className="descriptionArea">{SelDesc}</div>
        </Col>
      </Row>
    </>
  );
};

export default TimelinePage;
