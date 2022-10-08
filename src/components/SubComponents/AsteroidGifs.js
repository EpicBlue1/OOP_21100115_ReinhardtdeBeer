import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Astobj from "./AstroidObj";
import "./AstroidObjects.css";

const AsteroidInfo = () => {
  const [DispData, setDispData] = useState([]);

  const Radar = [];

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC"
      )
      .then((res) => {
        const numText = "2015-09-07";
        const data = res.data.near_earth_objects[numText];
        console.log(data);

        var AsterTot = 0;
        for (var i = 0; i < data.length; i++) {
          AsterTot +=
            (data[i].estimated_diameter.meters.estimated_diameter_max +
              data[i].estimated_diameter.meters.estimated_diameter_max) /
            2;
        }
        var Averagesize = AsterTot / data.length;

        for (let i = 0; i < data.length; i++) {
          let AssName = "Object " + [i] + " " + data[i].name;
          let potentially = data[i].is_potentially_hazardous_asteroid;
          let AsSize =
            (data[i].estimated_diameter.meters.estimated_diameter_max +
              data[i].estimated_diameter.meters.estimated_diameter_max) /
            2;

          let AsPercent =
            (Averagesize /
              (data[i].estimated_diameter.meters.estimated_diameter_max +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2) *
            100;
          if (AsPercent > 100) {
            AsPercent = 100;
          }
          console.log(AsPercent);

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
            Size:
              (data[i].estimated_diameter.meters.estimated_diameter_max +
                data[i].estimated_diameter.meters.estimated_diameter_max) /
              2,
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

  return <div className="AstroidHold">{DispData}</div>;
};

export default AsteroidInfo;
