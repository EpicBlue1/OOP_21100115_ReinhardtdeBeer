import './index.css';
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import AsInfo from './components/AsteroidInfo';
import Asgraph from './components/AstroidGraphs';
import Timeline from './components/Timeline';
import Dashboard from './components/Dash';


function App() {
  return (
    <>
      <div className="App">

      <Header />
      
      <Routes>
      <Route path="/" element={<Dashboard />} ></Route>
      <Route path="/AsInfo" element={<AsInfo />} ></Route>
      <Route path="/Timeline" element={<Timeline />} ></Route>
      <Route path="/AstroidGraphs" element={<Asgraph />} ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
