import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Style from './Nav.module.scss';
import { useState, useEffect, useRef } from 'react';

//navigation
const Nav = () =>{


    return(
        //fragment
        <Row className={Style.navStyling}>
            <Col md={{span:2, offset: 0}}><div className={Style.navbarImg}></div><div className={Style.navTex}>EO</div></Col>
            <Col className={Style.NavText} md={{span:3, offset: 1}}><Link to="/"><div className={Style.NavLinks}>Home</div></Link></Col>
            <Col className={Style.NavText} md={{span:3, offset: 0}}><Link to="/AstroidGraphs"><div className={Style.NavLinks}>Graph Compare</div></Link></Col>
            <Col className={Style.NavText} md={{span:3, offset: 0}}><Link to="/Timeline"><div className={Style.NavLinks}>Timeline</div></Link></Col>    
        </Row>
    )
}

export default Nav;