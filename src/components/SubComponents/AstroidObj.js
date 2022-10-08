import "reactjs-popup/dist/index.css";
import "./AstroidObjects.css";

const AstroidObject = (props) => {
  return (
    <div className="AsConStyle">
      <img alt="Asteroid GIF" className="AsImg" src={props.pic} />
      <h3 className="HeadingThree">{props.name}</h3>
      <p>Size: {props.size}m</p>
      <p>Magnitude: {props.magnitude}</p>
      <p>Velocity: {props.velocity}</p>
      <p>Potentially Hazardous: {props.PH}</p>
    </div>
  );
};

export default AstroidObject;
