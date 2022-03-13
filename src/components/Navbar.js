import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

//navigation
const Navigation = () =>{
    return(
        //fragment
        <>
<Navbar bg="dark" expand="lg">
  <Container fluid>
    <div className='navbarImg'></div>
    <Navbar.Brand className='Navigation'>Title</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/GraphView">GraphView</Link></Nav.Link>
        <Nav.Link><Link to="/Timeline">Timeline</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation;