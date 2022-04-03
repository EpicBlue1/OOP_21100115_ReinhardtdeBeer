import './index.css';
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Asgraph from './components/AstroidGraphs';
import Timeline from './components/TimeLinePage';
import Dashboard from './components/Dash';
import Navigation from './components/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
      <Container fluid className="App">

      <Navigation />
      
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Timeline" element={<Timeline />} ></Route>
      <Route path="/AstroidGraphs" element={<Asgraph />} ></Route>
      </Routes>

    </Container>
    </>
  );
}

export default App;
