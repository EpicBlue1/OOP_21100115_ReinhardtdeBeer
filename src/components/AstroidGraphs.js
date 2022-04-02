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
import AsteroidGraph from './SubComponents/AsGraph'
import GraphRadars from './SubComponents/GraphRadarData'





ChartJS.register(ArcElement, Tooltip, RadialLinearScale, PointElement, LineElement, Filler, Legend);




const AstroidGraphs = () =>{


    return(
    <Container fluid>
        <Row><h1 className="Heading">Near Earth Objects 2015 September</h1></Row>
        <Row><div className="Descript"><p>Lorem ipsum lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt laborum</p></div></Row>
        <Row>
        <Col>
            <div className="GraphOne">
                <AsteroidGraph/>
            </div>
        </Col>

        <Col>
            <div className="GraphOne">
                <GraphRadars/>
            </div>
        </Col>
        </Row>
    </Container> 

    )
}

export default AstroidGraphs;