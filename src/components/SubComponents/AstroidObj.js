import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AstroidObjects.css';

const AstroidObject = () =>{
    return (
        <>
        <Col className="AsCon col">
            <h3>Astroid Name</h3>
            <div className="AsImg"></div>
            <p>Name</p>
            <p>Size</p>
            <p>Date</p>   
        </Col>
        <Col className="AsCon col">
            <h3>Astroid Name</h3>
            <img />
        </Col>
        <Col className="AsCon col">
            <h3>Astroid Name</h3>
            <img />
        </Col>
        <Col className="AsCon col">
            <h3>Astroid Name</h3>
            <img />
        </Col>
        <Col className="AsCon col">
            <h3>Astroid Name</h3>
            <img />
        </Col>
        </>
        
    )
}

export default AstroidObject