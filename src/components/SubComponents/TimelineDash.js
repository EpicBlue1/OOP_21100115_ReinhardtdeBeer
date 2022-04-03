import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
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
const Timeline = () =>{

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    return(
        //fragment
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
    )
}

export default Timeline;