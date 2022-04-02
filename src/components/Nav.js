import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

//navigation
const Nav = () =>{


    return(
        //fragment
        <Row>
            <div className='navStyling'>
                <div className='navbarImg'></div>
                <div className='navbTex'><p className='orange'>N</p><p>EO</p></div>
                <div className='Icons'>
                    <button className="btn btn-primary IconButton"><Link to="/"><div className='IconOne'></div></Link></button>
                    <button className="btn btn-primary IconButton"><Link to="/AstroidGraphs"><div className='IconTwo'></div></Link></button>
                    <button className="btn btn-primary IconButton"><Link to="/Timeline"><div className='IconThree'></div></Link></button>
                </div>
            </div>
        </Row>
    )
}

export default Nav;