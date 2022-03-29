import react from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';

const AstroidObject = (props) =>{
    return (

        <Col className="AsCon col-4 col-md-2">
            <h3>Object {props.num}</h3>
            <div className="AsImg"></div>
            <p>Name: {props.name}</p>
            <p>Size: {props.size}m</p>
            <p>Date: {props.date}</p>
            <p>Magnitude: {props.magnitude}</p>   
            <p>Velocity: {props.velocity}</p>
            <p>Potentially Hazardous: {props.PH}</p>   

        </Col>
    )
}

export default AstroidObject