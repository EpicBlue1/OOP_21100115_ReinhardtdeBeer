import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import AsGra from './SubComponents/AsteroidRadar';
import Astobj from './SubComponents/AstroidObj';
import {Link} from 'react-router-dom';



ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);


const AstroidGraphs = () =>{

    const [PieInfo, setPieInfo] = useState([]);
    const [Someinfo, setSomeinfo] = useState([]);
    const [RadarInfo, setRadarInfo] = useState([]);
    const [DispData, setDispData] = useState([]);
    // const [labels, setLabels] = useState([]);


    const Radar = [];

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[numText];

            // for(let i = 0; i < data.length; i++){
                
            //         // Name: 'Object ' + [i] + ' ' + data[i].name, 
            //         // EstDia: (data[i].estimated_diameter.meters.estimated_diameter_min + data[i].estimated_diameter.meters.estimated_diameter_max) *2
            //         let lol = 'Object ' + [i] + ' ' + data[i].name;
            //     // Radar.push({})
            //     Someinfo.push(lol)

            // }


            const getLength = data.length;            

            // let AsOne = data[2015-09-07]
            let AsOne = (data[1].estimated_diameter.meters.estimated_diameter_min + data[1].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsTwo = (data[2].estimated_diameter.meters.estimated_diameter_min + data[2].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsThree = (data[3].estimated_diameter.meters.estimated_diameter_min + data[3].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFour = (data[4].estimated_diameter.meters.estimated_diameter_min + data[4].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFive = (data[5].estimated_diameter.meters.estimated_diameter_min + data[5].estimated_diameter.meters.estimated_diameter_max) *2;

            let AsOneName = 'Object ' + [1] + ' ' + data[1].name;
            let AsTwoName = 'Object ' + [2] + ' ' + data[2].name;
            let AsThreeName = 'Object ' + [3] + ' ' + data[3].name;
            let AsFourName = 'Object ' + [4] + ' ' + data[4].name;
            let AsFiveName = 'Object ' + [5] + ' ' + data[5].name;


            console.log(data);


            setPieInfo([AsOne, AsTwo, AsThree, AsFour, AsFive]);
            setDispData([AsOneName, AsTwoName, AsThreeName, AsFourName, AsFiveName]);


        })

    }, []) //only run once

    console.log(PieInfo);


    return(
    <Container fluid className='InfoCon'>
        <Row><h1 className="Heading">Near Earth Objects 2015 September</h1></Row>
            <Row>
                <div className="Buttons">
                    <button className="btn btn-primary"><Link to="/AstroidGraphs">Graph View</Link></button>
                    <button className="btn btn-primary"><Link to="/">Astroid Preview</Link></button>
                </div>
            </Row>
    <Row>
        <Col>
            <div className="GraphOne">
            <h2>Top 5 Near Earth Objects in meters</h2>
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
            </div>
        </Col>
        <Col>
            <div className="GraphTwo">
            <h2>Object Stats</h2>
                <AsGra />            
            </div>
        </Col>
    </Row>
    </Container>
        
        

    )
}

export default AstroidGraphs;