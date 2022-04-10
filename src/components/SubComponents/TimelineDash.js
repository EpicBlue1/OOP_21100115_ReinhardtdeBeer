import React from 'react';
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

    //force update
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + props.data + '&end_date=' + props.data + '&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {
            const data = res.data.near_earth_objects[props.data];
            console.log(data);

            // let AsOne = data[2015-09-07]
            const Dates = []

            for(var i = 0; i < data.length; i++){
                let DateDat = data[i].close_approach_data[0].close_approach_date_full;
                Dates.push({
                    DateNum: parseInt(DateDat.substring(12)), Time: DateDat.substring(12), Size: (data[i].estimated_diameter.meters.estimated_diameter_max + data[0].estimated_diameter.meters.estimated_diameter_max) *2
                })
            }

            const sortedDates = Dates.sort((b, a) => b.DateNum - a.DateNum);


            // let DateTwoName = 'Object ' + [1] + ' ' + data[2].name;
            // let DateThreeName = 'Object ' + [2] + ' ' + data[3].name;
            // let DateFourName = 'Object ' + [3] + ' ' + data[4].name;
            // let DateFiveName = 'Object ' + [4] + ' ' + data[5].name;


            setTimeLineInfo(sortedDates);
            // setDispData([DateOneName, DateTwoName, DateThreeName, DateFourName, DateFiveName]);
        })

    }, []) //only run once

    console.log(TimeLineInfo)


    let labels = TimeLineInfo;

    return(
        //fragment
        <Line options = {{
        responsive: true,
        plugins: {
            legend: {
            },
            title: {
            display: false,
        },
        },
        }}
        data = {{
            labels: labels.map((o) => o.Time),
            datasets: [
            {
                label: '5 Near Object Sizes By Time In Meters Today',
                data: labels.map((o) => o.Size),
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