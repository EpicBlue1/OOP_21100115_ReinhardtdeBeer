import react from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AstroidObjects.css";

const AstroidObject = (props) => {
  return (
    <div className="AsConStyle">
      <img className="AsImg" src={props.pic} />
      <h3 className="HeadingThree">{props.name}</h3>
      <p>Size: {props.size}m</p>
      <p>Magnitude: {props.magnitude}</p>
      <p>Velocity: {props.velocity}</p>
      <p>Potentially Hazardous: {props.PH}</p>
    </div>
  );
};

export default AstroidObject;
