import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Dash from './Dash'

//navigation
const Header = (props) =>{


    return(
        //fragment
        <Row className='BackgroundImage'>
            <Col className='col-2 head_section'><div className='dateDispStyle'><p className='dateDisp'>{props.data}</p></div></Col>
            <Col className='col-7 head_section'>
            <div className='Title'>
                <h1>Welcome</h1>
                <p className='Description'>Lorem ipsum lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt laborum</p>
            </div>
            </Col>
            <Col className='col-3 head_section'>
                <div className='globe_Con'>
                    <model-viewer alt='Earth' exposure='50' camera-controls environment-image='img\2560x1600-2936260-space-dark___cosmos-space-wallpapers.jpg' auto-rotate rotation-per-second='15deg' src='assets/Earth Model.gltf'></model-viewer>
                </div>
            </Col>
        </Row>
    )
}

export default Header;