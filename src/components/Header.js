import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//navigation
const Header = () =>{
    return(
        //fragment
        <>
        <Container fluid className='Background'>
        <Row>
            <Col className='col-1 head_section'><p className='dateDisp'>Date</p></Col>
            <Col className='col-5 head_section title'><h1 className='Title'>Welcome</h1></Col>
            <Col className='col-6 head_section'><model-viewer alt='Earth' exposure='50' environment-image='img\2560x1600-2936260-space-dark___cosmos-space-wallpapers.jpg' auto-rotate rotation-per-second='15deg' src='assets/Earth Model.gltf'></model-viewer></Col>
        </Row>
        </Container>
        </>
    )
}

export default Header;