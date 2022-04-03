import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import AsGra from './AsteroidRadar';
import Astobj from './AstroidObj';
import {Link} from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const AsGraphsOne = () =>{

    const [RadInfo, setRadInfo] = useState([]);
    const [RadData, setRadData] = useState([]);

    const RadarGr = [];


    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[numText];
            var textOne = 0;
            var textTwo = 0;

            var totalM = 0;
            for(var i = 0; i < data.length; i++) {
                totalM += data[i].absolute_magnitude_h;
            }
            var avgM = totalM / data.length;

            var totalS = 0;
            for(var i = 0; i < data.length; i++) {
                totalS += ((data[i].estimated_diameter.meters.estimated_diameter_max + data[i].estimated_diameter.meters.estimated_diameter_max) / 2);
            }
            var avgS = totalS / data.length;

            var totalV = 0;
            for(var i = 0; i < data.length; i++) {
                textOne = data[i].close_approach_data[0].relative_velocity.kilometers_per_hour;
                var numOne = parseInt(textOne);
                totalV += numOne;
            }
            var avgV = totalV / data.length;

            var totalMD = 0;
            for(var i = 0; i < data.length; i++) {
                textTwo = data[i].close_approach_data[0].miss_distance.kilometers;
                var numTwo = parseInt(textTwo);
                totalMD +=  numTwo;
            }
            var avgMD = totalMD / data.length;
            

            for(let i = 0; i < 1; i++) {
                let potentially = data[i].is_potentially_hazardous_asteroid;
                let AssName = 'Object ' + [i] + ' ' + data[i].name;

                let magPerc = (avgM / data[i].absolute_magnitude_h) * 100;
                if(magPerc > 100){
                    magPerc = 100;
                }

                let magSi = (avgS /  (data[i].estimated_diameter.meters.estimated_diameter_max + data[i].estimated_diameter.meters.estimated_diameter_max)) * 100;
                if(magSi > 100){
                    magSi = 100;
                }

                let magVol = (avgV / data[i].close_approach_data[0].relative_velocity.kilometers_per_hour) * 100;
                if(magVol > 100){
                    magVol = 100;
                }

                let magMd = (avgMD / data[i].close_approach_data[0].miss_distance.kilometers) * 100;
                if(magMd > 100){
                    magMd = 100;
                }

                RadarGr.push({
                    Number: i,
                    Name: AssName,
                    MissDistance: magMd,
                    Size: magSi,
                    Velocity: magVol,
                    Magnitude: magPerc,
                    potentiallyHazardous: potentially.toString(),
                    Date: data[i].close_approach_data[0].close_approach_date_full,
                    })
                
            }

            let Items = RadarGr.map((item) => <AsGra date={item.Date} num={item.Number} name={item.Name} PH={item.potentiallyHazardous} magnitude={item.Magnitude} velocity={item.Velocity} size={item.Size} MD={item.MissDistance}/>)
            setRadData(Items);


        })

    }, []) //only run once

    const [PieInfo, setPieInfo] = useState([]);
    const [Someinfo, setSomeinfo] = useState([]);
    const [RadarInfo, setRadarInfo] = useState([]);
    const [DispData, setDispData] = useState([]);
    // const [labels, setLabels] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[numText];

            // let AsOne = data[2015-09-07]
            let AsOne = (data[0].estimated_diameter.meters.estimated_diameter_min + data[1].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsTwo = (data[1].estimated_diameter.meters.estimated_diameter_min + data[2].estimated_diameter.meters.estimated_diameter_max) *2;
            // let AsThree = (data[2].estimated_diameter.meters.estimated_diameter_min + data[3].estimated_diameter.meters.estimated_diameter_max) *2;
            // let AsFour = (data[3].estimated_diameter.meters.estimated_diameter_min + data[4].estimated_diameter.meters.estimated_diameter_max) *2;
            // let AsFive = (data[4].estimated_diameter.meters.estimated_diameter_min + data[5].estimated_diameter.meters.estimated_diameter_max) *2;

            let AsOneName = 'Object ' + [0] + ' ' + data[1].name;
            let AsTwoName = 'Object ' + [1] + ' ' + data[2].name;
            // let AsThreeName = 'Object ' + [2] + ' ' + data[3].name;
            // let AsFourName = 'Object ' + [3] + ' ' + data[4].name;
            // let AsFiveName = 'Object ' + [4] + ' ' + data[5].name;


            setPieInfo([AsOne, AsTwo]);
            setDispData([AsOneName, AsTwoName]);


        })

    }, []) //only run once

    console.log(PieInfo);


    return(
    <>
                <Pie data = {{
                labels: DispData,
                datasets: [
                {
                label: '# of Votes',
                data: PieInfo,
                backgroundColor: [
                    'rgba(152,198,240, 0.5)',
                    'rgba(121,162,234, 0.5)',
                    'rgba(85,118,234, 0.5)',
                    'rgba(60,49,180, 0.5)',
                    'rgba(41,23,101, 0.5)',
                ],
                borderColor: [
                    'rgba(152,198,240, 1)',
                    'rgba(121,162,234, 1)',
                    'rgba(85,118,234, 1)',
                    'rgba(60,49,180, 1)',
                    'rgba(41,23,101, 1)',
                ],
                borderWidth: 1,
                },
            ],
        }}
                />
</>
        
        

    )
}

export default AsGraphsOne;