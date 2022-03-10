import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//navigation
const Header = () =>{
    return(
        //fragment
        <>
        <Container fluid className='Background'>
        <Row>
            <Col className='col-1 head_section'><p className='dateDisp'>Date</p></Col>
            <Col className='col-5 head_section'>
            <div className='Title'>
                <h1>Welcome</h1>
                <p className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            </Col>
            <Col className='col-6 head_section'><model-viewer className='earth' alt='Earth' exposure='50' camera-controls environment-image='img\2560x1600-2936260-space-dark___cosmos-space-wallpapers.jpg' auto-rotate rotation-per-second='15deg' src='assets/Earth Model.gltf'></model-viewer></Col>
        </Row>
        </Container>
        </>
    )
}

export default Header;