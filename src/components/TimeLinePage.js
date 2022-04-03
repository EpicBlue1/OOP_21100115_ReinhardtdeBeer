import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
const TimelinePage = () =>{

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    return(
        //fragment
        <>
        <Row><h1 className="Heading">Timeline</h1></Row>
        <Row><div className="Descript"><p>Lorem ipsum lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt laborum</p></div></Row>
        <Row>
        <Col className="col-8 TimelineCol">
        <Line options = {{
        responsive: true,
        plugins: {
            legend: {
            },
            title: {
            display: true,
        },
        },
        }}
        data = {{
            labels,
            datasets: [
            {
                label: 'Launches Per Year',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgba(255, 102, 0, 1)',
                backgroundColor: 'rgba(255, 102, 0, 0.5)',
            }
            ],
        }}
        height = {800}
        width = {1200}
        />
        </Col>
        <Col>
        <h2>Select Property</h2>
            <button className="btn btn-primary PropertySel">Size</button>
            <button className="btn btn-primary PropertySel">MissDistance</button>
            <button className="btn btn-primary PropertySel">Velocity</button>
            <button className="btn btn-primary PropertySel">Magnitude</button>
            <button className="btn btn-primary PropertySel">Total Objects</button> 
        </Col>
    </Row>
    </>
        
        
    )
}

export default TimelinePage;