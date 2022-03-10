import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

//navigation
const Navigation = () =>{
    return(
        //fragment
        <>
<Navbar bg="dark" expand="lg">
  <Container fluid>
    <div className='navbarImg'></div>
    <Navbar.Brand src='' className='Navigation' href="#home">Title</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='Navigation' href="/">Home</Nav.Link>
        <Nav.Link className='Navigation' href="/GraphView">Graph</Nav.Link>
        <Nav.Link className='Navigation' href="/Timeline">Timeline</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation;