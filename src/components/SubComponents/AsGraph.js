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
import PieInfo from '../AstroidGraphs';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const AsGraphsOne = (props) =>{

    if(props.data === undefined){
        return(
            <div className="Loading">Loading...</div>
        )
    }

    return(
    <>
                <Pie data = {{
                labels: props.data.map((o) => o.Name),
                datasets: [
                {
                label: '# of Votes',
                data: props.data.map((o) => o.Size),
                backgroundColor: [
                    'rgba(181, 156, 201, 0.75)',
                    'rgba(131, 90, 165, 0.75)'

                ],
                borderColor: [
                    'rgba(181, 156, 201, 1)',
                    'rgba(131, 90, 165, 1)'

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