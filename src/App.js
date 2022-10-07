import './index.scss';
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Asgraph from './components/AstroidGraphs';
import Timeline from './components/TimeLinePage';
import Dashboard from './components/Dash/Dash';
import Navigation from './components/SubComponents/NavigationBar/Nav';
import Container from 'react-bootstrap/Container';
import Footer from './components/SubComponents/Footer/Footer'


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

      <Footer/>

    </Container>
    </>
  );
}

export default App;
