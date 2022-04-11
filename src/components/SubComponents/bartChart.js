import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const barChart = () =>{


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    return(
    <>
            <Bar options = {{
                elements: {
                    bar: {
                    borderWidth: 2,
                    },
                },
                responsive: true,
                plugins: {
                    legend: {
                    },
                    title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
                    },
                },
            }}
            data = {{
                labels,
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgba(181, 156, 201, 1)',
                    backgroundColor: 'rgba(181, 156, 201, 0.75)'

                  },
                  {
                    label: 'Dataset 2',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgba(131, 90, 165, 1)',
                    backgroundColor: 'rgba(131, 90, 165, 0.75)',
                  },
                ],
              }}
        />
</>
        
        

    )
}

export default barChart;