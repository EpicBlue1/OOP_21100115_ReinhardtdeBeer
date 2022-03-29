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



ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);


const AstroidGraphs = () =>{

    const [PieInfo, setPieInfo] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[numText];
            const getLength = data.length;            

            let AsOne = (data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_min + data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsTwo = (data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_min + data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsThree = (data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_min + data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFour = (data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_min + data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFive = (data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_min + data[Math.floor(Math.random() * getLength)].estimated_diameter.meters.estimated_diameter_max) *2;

            console.log(data);


            setPieInfo([AsOne, AsTwo, AsThree, AsFour, AsFive]);
        })
    }, []) //only run once

    return(
    <Container fluid className='InfoCon'>
    <Row>
        <Col>
            <div className="GraphOne">
                <h2>Near Earth Objects on 2020/05/15</h2>
                <Pie data = {{
                labels: ['Object 1', 'Object 2', 'Object 3', 'Object 4', 'Object 5'],
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