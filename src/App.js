import './index.css';
import Header from "./components/Header";
import Navigation from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import AsInfo from './components/AsteroidInfo';
import Asgraph from './components/AstroidGraphs';
import Timeline from './components/Timeline';
import Astobj from './components/SubComponents/AstroidObj';


function App() {
  return (
    <>
      <div className="App">

      <Navigation />
      <Header />
      
      <Routes>
      <Route path="/" element={<AsInfo />} ></Route>
      <Route path="/AsInfo" element={<Astobj />} ></Route>
      <Route path="/Timeline" element={<Timeline />} ></Route>
      <Route path="/AstroidGraphs" element={<Asgraph />} ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
