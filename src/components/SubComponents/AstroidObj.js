import react from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AstroidObject = (props) =>{
    return (

    <div className='AsConStyle'>
    <h3 className='HeadingThree'>{props.name}</h3>
    <Popup trigger={<button><div ><img className="AsImg" src={props.pic}/></div>
        </button>} position="right center">
        <div>
        <p>Size: {props.size}m</p>
        <p>Magnitude: {props.magnitude}</p>   
        <p>Velocity: {props.velocity}</p>
        <p>Potentially Hazardous: {props.PH}</p></div>
        </Popup>
    </div>
        
    )
}

export default AstroidObject