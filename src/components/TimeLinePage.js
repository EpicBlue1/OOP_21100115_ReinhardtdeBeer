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

    const [TomorrowDat, setTommorowDat] = useState([])

    const linkVal = useRef("Size");

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
        .then((res) => {

            let date = new Date();

            let Day = date.getDate() + 1;
            let Month = (date.getMonth()+1);
            let Year = date.getFullYear();

            if(Day > 28){
                Month = Month + 1;
                Day = 1;
            }
            if(Month < 10){
                Month = "0" + Month;
            }
            if(Day < 10){
                Day = "0" + Day;
            }

            Day = Day.toString();
            Month = Month.toString();
            Year = Year.toString();

            let DateFull = Year + "-" + Month + "-" + Day;
            console.log(DateFull)
            const data = res.data.near_earth_objects[DateFull];

            console.log(data);

            const Tomorrow = [];

            for(let i = 0; i < data.length; i++){
                let DateDat = data[i].close_approach_data[0].close_approach_date_full;
                Tomorrow.push({
                    Size: (data[i].estimated_diameter.meters.estimated_diameter_min + data[i].estimated_diameter.meters.estimated_diameter_max) /2,
                    MissDistance: 0,
                    MissDistanceLunar: 0,
                    Velocity: 0,
                    Magnitude: 0,
                    TimeNum: parseInt(DateDat.substring(12)),
                    Time: DateDat.substring(12)
                })
            }

            const sortedTomorrow = Tomorrow.sort((b, a) => b.TimeNum - a.TimeNum);


            setTommorowDat(sortedTomorrow);
})

    }, []) //only run once

    console.log(TomorrowDat)

    var data = "";

    function updateProperties(){
        let getValue = linkVal.current.value;
        if(getValue === "Size"){
        data =  TomorrowDat.map((o) => o.Size);
          } else if(getValue === "MissDistance"){
            Line.data.data = TomorrowDat.map((o) => o.Size);
        } else if(getValue === ""){
        data =  TomorrowDat.map((o) => o.MissDistance);
          }
        Line.update();
        console.log(data);
    }    

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
            labels: TomorrowDat.map((o) => o.Time),
            datasets: [
            {
                label: 'Launches Per Year',
                data,
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

        <select  onChange={updateProperties} ref={linkVal}>
            <option value="Size" className="btn btn-primary PropertySel">Size</option>
            <option className="btn btn-primary PropertySel">MissDistance</option>
            <option className="btn btn-primary PropertySel">Velocity</option>
            <option className="btn btn-primary PropertySel">Magnitude</option>
            <option className="btn btn-primary PropertySel">MissDistanceLunar</option>
        </select>
        </Col>
    </Row>
    </>
        
        
    )
}

export default TimelinePage;