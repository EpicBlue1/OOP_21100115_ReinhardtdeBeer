import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const AstroidObject = (props) =>{

    let label = [props.name];
    let text = props.velocity;
    let num = parseInt(text)
    let data = [props.MD, props.size, props.velocity, props.magnitude];
    console.log(num);


    return (
        <div className="AsGraph">
            <Radar data = {{
                labels: ["Miss Distance", "Size", "Velocity", "Magnitude"],
                datasets: [
                    {
                    label,
                    data,
                    backgroundColor: [
                        'rgba(152,198,240, 0.5)'
                    ],
                    borderColor: 'rgba(152,198,240, 1)',
                    borderWidth: 1,
                    },
                ],
                }}
            />
            <p>Is Potentially Hazardous: {props.PH}</p>
            </div>
        
    )
}

export default AstroidObject