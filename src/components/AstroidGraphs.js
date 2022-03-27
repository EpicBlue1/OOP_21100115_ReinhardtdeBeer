import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);


const AstroidGraphs = () =>{

    const [PieInfo, setPieInfo] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const num = '2015-09-07';
            const data = res.data.near_earth_objects;
            console.log(data[num]);

            // let AsOne = data[2015-09-07]

            setPieInfo()
        })
    }, []) //only run once

    return(
    <Container fluid className='InfoCon'>
    <Row>
        <Col>
            <div className="GraphOne">
                <Pie data = {{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [
                {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
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
            <div className="GraphTwo"></div>
        </Col>
    </Row>
    </Container>
        
        

    )
}

export default AstroidGraphs;