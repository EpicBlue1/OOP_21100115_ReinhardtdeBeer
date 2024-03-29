import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../Header";
import Astobj from "../SubComponents/AstroidObj";
import Pie from "../SubComponents/ChartDash";
import { default as Line } from "../SubComponents/TimelineDash";
import "./Dash.scss";

const Dash = () => {
  const [DispData, setDispData] = useState("Loading..");
  const [TotNearObj, setTotNearObj] = useState("Loading..");
  const [AverSize, setAverSize] = useState("Loading..");
  const [AverMiss, setAverMiss] = useState("Loading..");
  const [Todate, setTodate] = useState("2015-09-07");
  const Radar = [];

  //force update
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC"
      )
      .then((res) => {
        let date = new Date();

        let Day = date.getDate();
        Day = Day.toString();
        let Month = date.getMonth() + 1;
        Month = Month.toString();
        let Year = date.getFullYear();
        Year = Year.toString();

        if (Day < 10) {
          Day = "0" + Day;
        }

        if (Month < 10) {
          Month = "0" + Month;
        }

        let DateFull = Year + "-" + Month + "-" + Day;
        const data = res.data.near_earth_objects[DateFull];

        var TotalNear = 0;
        let AvSize = 0;

        for (let j = 0; j < data.length; j++) {
          TotalNear += data.length;
          AvSize +=
            (data[j].estimated_diameter.meters.estimated_diameter_max +
              data[j].estimated_diameter.meters.estimated_diameter_max) /
            2;
        }
        let AverageSize = AvSize / data.length;
        let AvSizeRound = Math.round(AverageSize * 100) / 100 + "m";

        let AvMiss = 0;
        let AvMissText = "";

        for (let j = 0; j < data.length; j++) {
          AvMissText = data[j].close_approach_data[0].miss_distance.kilometers;
          AvMiss += parseInt(AvMissText);
        }
        let AverageMiss = AvMiss / data.length;
        let AvMissRound = Math.round(AverageMiss * 100) / 100 + "km";

        console.log(TotalNear);

        setAverMiss(AvMissRound);
        setAverSize(AvSizeRound);
        setTotNearObj(TotalNear);
        setTodate(DateFull);
      });
  }, []); //only run once

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
          Todate +
          "&end_date=" +
          Todate +
          "&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC"
      )
      .then((res) => {
        const data = res.data.near_earth_objects[Todate];
        console.log(data);

        var AsterTot = 0;
        for (let j = 0; j < data.length; j++) {
          AsterTot +=
            (data[j].estimated_diameter.meters.estimated_diameter_max +
              data[j].estimated_diameter.meters.estimated_diameter_max) /
            2;
        }
        var Averagesize = AsterTot / data.length;

        for (let i = 0; i < 5; i++) {
          AsterTot +=
            (data[i].estimated_diameter.meters.estimated_diameter_min +
              data[i].estimated_diameter.meters.estimated_diameter_max) /
            2;
          let AssName = "Object " + [i] + " " + data[i].name;
          let potentially = data[i].is_potentially_hazardous_asteroid;
          let AsSize =
            (data[i].estimated_diameter.meters.estimated_diameter_min +
              data[i].estimated_diameter.meters.estimated_diameter_max) /
            2;

          let AsPercent =
            (Averagesize /
              (data[i].estimated_diameter.meters.estimated_diameter_min +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2) *
            100;
          if (AsPercent > 100) {
            AsPercent = 100;
          }
          console.log(Averagesize);

          let picture = "";

          const GifOne = "../img/MeteorTwoXSmalll.gif";
          const GifTwo = "../img/MeteorOneSmall.gif";
          const GifThree = "../img/MeteorTwoMed.gif";
          const GifFour = "../img/MeteorThreeMed.gif";
          const GifFive = "../img/MeteorOneLarge.gif";
          const GifSix = "../img/MeteorThreeLarge.gif";

          if (AsPercent >= 0 && AsPercent <= 16.66) {
            picture = GifSix;
          } else if (AsPercent >= 16.67 && AsPercent <= 33.33) {
            picture = GifFive;
          } else if (AsPercent >= 33.34 && AsPercent <= 49.99) {
            picture = GifFour;
          } else if (AsPercent >= 50 && AsPercent <= 66.65) {
            picture = GifThree;
          } else if (AsPercent >= 66.66 && AsPercent <= 83.31) {
            picture = GifTwo;
          } else if (AsPercent >= 83.32 && AsPercent <= 100) {
            picture = GifOne;
          }

          Radar.push({
            Number: i,
            Name: AssName,
            MissDistance:
              data[i].close_approach_data[0].miss_distance.kilometers,
            Size: AsSize,
            Velocity:
              data[i].close_approach_data[0].relative_velocity
                .kilometers_per_hour,
            Magnitude: data[i].absolute_magnitude_h,
            potentiallyHazardous: potentially.toString(),
            Date: data[i].close_approach_data[0].close_approach_date_full,
            Picture: picture,
          });
        }

        let startItem = Radar.map((item) => (
          <Astobj
            pic={item.Picture}
            date={item.Date}
            num={item.Number}
            name={item.Name}
            PH={item.potentiallyHazardous}
            magnitude={item.Magnitude}
            velocity={item.Velocity}
            size={item.Size}
            MD={item.MissDistance}
          />
        ));
        setDispData(startItem);
      });
  }, []); //only run once

  return (
    <>
      <Header data={Todate} />
      <Row className="ConDash">
        <Col className="infoblock" md={{ span: 4 }}>
          <h2>Total Near Earth Objects Today</h2>
          <p className="Number">{TotNearObj}</p>
        </Col>
        <Col className="infoblockOne" md={{ span: 4 }}>
          <h2>Average Miss Dinstance To Earth Today</h2>
          <p className="Number">{AverMiss}</p>
        </Col>
        <Col className="infoblock" md={{ span: 4 }}>
          <h2>Average Asteroid Size Today</h2>
          <div className="Number">{AverSize}</div>
        </Col>

        <Col className="col-12 AsPrewCon">
          <h2>Top 5 Asteroids Today</h2>
          {DispData}
        </Col>

        <Col md={{ span: 12 }} className="paddingTOP">
          Compare
        </Col>

        <Col md={{ span: 4 }}>
          <div className="PieChart">
            <Pie data={Todate} />
          </div>
        </Col>
        <Col md={{ span: 1 }}></Col>
        <Col md={{ span: 7 }}>
          <Line data={Todate} />
        </Col>
      </Row>
    </>
  );
};

export default Dash;
