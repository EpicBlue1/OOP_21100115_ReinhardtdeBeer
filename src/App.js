import './index.css';
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import Asgraph from './components/AstroidGraphs';
import Timeline from './components/Timeline';
import Dashboard from './components/Dash';
import Navigation from './components/Nav'


function App() {
  return (
    <>
      <div className="App">

      <Navigation />
      
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Timeline" element={<Timeline />} ></Route>
      <Route path="/AstroidGraphs" element={<Asgraph />} ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
