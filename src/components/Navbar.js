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
  <Container fluid className='Navigation'>
    <Image src='../img\ARTICLE-CRYPTO-2-1.png'></Image>
    <Navbar.Brand src='' href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation;