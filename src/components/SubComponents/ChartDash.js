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
import Dash from '../Dash';

ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);

const DashChart = (props) =>{

    const [RadData, setRadData] = useState([]);
    const RadarGr = [0];
    const [PieInfo, setPieInfo] = useState([]);
    const [DispData, setDispData] = useState(0);

    //force update
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + props.data + '&end_date=' + props.data + '&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const data = res.data.near_earth_objects[props.data];

            const Sizes = [];

            for(var i = 0; i < 5; i++){
                Sizes.push({
                    Size: (data[i].estimated_diameter.meters.estimated_diameter_min + data[i].estimated_diameter.meters.estimated_diameter_max) /2, Name: 'Object ' + [i] + ' ' + data[i].name
                })
            }

            console.log(Sizes);


            setPieInfo(Sizes);


        })

    }, []) //only run once

    console.log(PieInfo)


    return(
    <>
                <Pie data = {{
                labels: PieInfo.map((o) => o.Name),
                datasets: [
                {
                label: '# of Votes',
                data: PieInfo.map((o) => o.Size),
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

export default DashChart;