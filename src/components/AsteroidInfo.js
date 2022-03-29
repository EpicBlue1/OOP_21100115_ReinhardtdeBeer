import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Asgraph from './AstroidGraphs';
import Asobj from './SubComponents/AstroidObj';
import TimeLine from './Timeline';


import './SubComponents/AstroidObjects.css';

const AsteroidInfo = () => {
    return (
        <Container fluid className="InfoCon">
            <Row className='AsobjHeight'>
                <Asobj/>
            </Row>
            
            
        </Container>
    )
}

export default AsteroidInfo;