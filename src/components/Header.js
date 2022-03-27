import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';



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
                <p className='Description'>Lorem ipsum lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt laborum</p>
            </div>
            </Col>
            <Col className='col-6 head_section'>
                <model-viewer alt='Earth' exposure='50' camera-controls environment-image='img\2560x1600-2936260-space-dark___cosmos-space-wallpapers.jpg' auto-rotate rotation-per-second='15deg' src='assets/Earth Model.gltf'></model-viewer>
            </Col>
        </Row>
        <Row><div className='whitebar'>

                <select className='dateSel'>
                    <option>Choose Date</option>
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                    <option>Option Four</option>
                    <option>Option Five</option>
                </select>

                <button class="btn btn-primary chartSel"><Link to="/AsGraph">Chart View</Link></button>
                <button class="btn btn-primary chartSel"><Link to="/AsGraph">Astroid Preview</Link></button>

            
            </div></Row>
        </Container>
        </>
    )
}

export default Header;