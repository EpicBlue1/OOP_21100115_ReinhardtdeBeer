import axios from 'axios';
import { ArcElement, Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import './AstroidObjects.css';

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
                    backgroundColor: ['rgba(255, 102, 0, 0.5)'],
                    borderColor: 'rgba(255, 102, 0, 1)',
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