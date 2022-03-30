import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubComponents/AstroidObjects.css';
import {Link} from 'react-router-dom';

//navigation
const Timeline = () =>{
    return(
        //fragment
        <>
        <Row className="SizingIssue">
                <div className="Buttons">
                    <button className="btn btn-primary"><Link to="/">Back</Link></button>
                </div>
        </Row>
        <Row>
            <div className='TimeLineOne'>
            </div>
        </Row>
        </>
    )
}

export default Timeline;