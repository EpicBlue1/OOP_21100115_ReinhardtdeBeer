import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//navigation
const Header = (props) =>{


    return(
        //fragment
        <Row className='BackgroundImage'>
            <Col md={{span:2}}><div className='dateDispStyle'>{props.data}</div></Col>
            <Col md={{span:7}}>
            <div className='Title'>
                <h1>Welcome</h1>
                <p className='Description'>Welcome to NEO. Near-Earth Objects, with a focus on the current week. Asteroids, also known as near-Earth objects, circle and pass us every day. This Web-App monitors and compares probable orbits around the Earth.</p>
            </div>
            </Col>
            <Col md={{span:3}}>
                <div className='globe_Con'>
                    <model-viewer alt='Earth' exposure='50' camera-controls environment-image='img\2560x1600-2936260-space-dark___cosmos-space-wallpapers.jpg' auto-rotate rotation-per-second='15deg' src='assets/Earth Model.gltf'></model-viewer>
                </div>
            </Col>
        </Row>
    )
}

export default Header;