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
import LineDash from '../Dash'

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
const Timeline = (props) =>{

    const [TimeLineInfo, setTimeLineInfo] = useState([]);
    const [DispData, setDispData] = useState([]);
    // const [labels, setLabels] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + props.data + '&end_date=' + props.data + '&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const numText = '2015-09-07';
            const data = res.data.near_earth_objects[props.data];

            // let AsOne = data[2015-09-07]
            let AsOne = (data[0].estimated_diameter.meters.estimated_diameter_min + data[1].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsTwo = (data[1].estimated_diameter.meters.estimated_diameter_min + data[2].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsThree = (data[2].estimated_diameter.meters.estimated_diameter_min + data[3].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFour = (data[3].estimated_diameter.meters.estimated_diameter_min + data[4].estimated_diameter.meters.estimated_diameter_max) *2;
            let AsFive = (data[4].estimated_diameter.meters.estimated_diameter_min + data[5].estimated_diameter.meters.estimated_diameter_max) *2;

            let AsOneName = 'Object ' + [0] + ' ' + data[1].name;
            let AsTwoName = 'Object ' + [1] + ' ' + data[2].name;
            let AsThreeName = 'Object ' + [2] + ' ' + data[3].name;
            let AsFourName = 'Object ' + [3] + ' ' + data[4].name;
            let AsFiveName = 'Object ' + [4] + ' ' + data[5].name;


            setTimeLineInfo([AsOne, AsTwo, AsThree, AsFour, AsFive]);
            setDispData([AsOneName, AsTwoName, AsThreeName, AsFourName, AsFiveName]);


        })

    }, []) //only run once

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