import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import AstroidOne from '../img/MeteorOneSmall.gif';
import './astroidpreview.css';

axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-09-07&end_date=2020-09-10&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC')
.then((response) => {
    console.log(response.data.near_earth_objects);
})
.catch((err) => {
    console.log(err)
});

//navigation
const Preview = () =>{
    return(
        //fragment
        <>
        <Container fluid className='Background'>
        <Row><div className='whitebar'>
            
            </div></Row>
        <Row className='Astroids'>
            <Col className='col-2.4 Astroid'>

            <img src={AstroidOne} className='EarthOne' alt="loading..." />
            <ul className='Asinfo'>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
            </ul>
            
            </Col>
            <Col className='col-2.4 Astroid'>
                
            <img src={AstroidOne} className='EarthOne' alt="loading..." />
            <ul className='Asinfo'>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
            </ul>

            
            </Col>
            <Col className='col-2.4 Astroid'>
            <img src={AstroidOne} className='EarthOne' alt="loading..." />
            <ul className='Asinfo'>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
            </ul>

            
            </Col>
            <Col className='col-2.4 Astroid'>
            <img src={AstroidOne} className='EarthOne' alt="loading..." />
            <ul className='Asinfo'>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
            </ul>

            </Col>
            <Col className='col-2.4 Astroid'>
            <img src={AstroidOne} className='EarthOne' alt="loading..." />
            <ul className='Asinfo'>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
                <li>Size</li>
            </ul>

            
            </Col>

        </Row>
        </Container>
        </>
    )
}

export default Preview;