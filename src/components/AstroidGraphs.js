import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import AsGra from './SubComponents/AsteroidRadar';
import Astobj from './SubComponents/AstroidObj';
import {Link} from 'react-router-dom';
import AsteroidGraph from './SubComponents/AsGraph';
import GraphRadars from './SubComponents/GraphRadarData';
import BarChart from './SubComponents/bartChart';





ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);




const AstroidGraphs = () =>{

    let YearSelection = useRef();
    let MonthSelection = useRef();
    let DaySelection = useRef();

    const [Selection, setSelection] = useState()

    const userSelection = () => {
        let YearSelnum = YearSelection.current.value;
        let MonthSelnum = MonthSelection.current.value;
        let DaySelnum = DaySelection.current.value;
        let YearSel = YearSelnum.toString();
        let MonthSel = MonthSelnum.toString();
        let DaySel = DaySelnum.toString();


        let fullDate = YearSel + '-' + MonthSel + '-' + DaySel;
        setSelection(fullDate);
        console.log(fullDate);
    }

    return(
    <>
        <Row><h1 className="Heading">Near Earth Objects 2015 September</h1></Row>
        <Row><div className="Descript"><p>Lorem ipsum lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt laborum</p></div></Row>
        <Row>
        <Col>
            <div className="GraphOne">
                <div className="SelectDate">
                <h4>Input date</h4>
                <input className="DateInPut" ref={YearSelection} required placeholder="Year"></input>
                <input className="DateInPut" ref={MonthSelection} required placeholder="Month"></input>
                <input className="DateInPut" ref={DaySelection} required placeholder="Day"></input>
                <button onClick={userSelection} className="btn btn-primary DateSel">Select Date</button>
                </div>
                <div className="SelectDate">
                <h4>Select Asteroids to Compare</h4>
                <select className="ObjSel">
                    <option>Object 1</option>
                    <option>Object 2</option>
                    <option>Object 3</option>
                </select>
                <select className="ObjSel">
                    <option>Object 1</option>
                    <option>Object 2</option>
                    <option>Object 3</option>
                </select>
                <button onClick={userSelection} className="btn btn-primary DateSel">Compare</button>
                </div>
                
                <AsteroidGraph/>
            </div>
        </Col>

        <Col>
            <div className="GraphTwo">
                <GraphRadars/>
            </div>
            <div className="GraphTwo">
                <BarChart/>
            </div>
        </Col>
        </Row>
    </> 

    )
}

export default AstroidGraphs;