import './index.css';
import './astroid.css';
import Header from "./components/Header";
import Navigation from "./components/Navbar";
import Timeline from "./components/Timeline";
import Preview from "./components/AstroidPreview";
import Graphs from "./components/GraphView";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

      <Navigation />
      <Header />

      <Routes>
      <Route path="/" element={<Preview />} ></Route>
      <Route path="/GraphView" element={<Graphs />} ></Route>
      <Route path="/Timeline" element={<Timeline />} ></Route>
      </Routes>

    </div>
    </>
  );
}

export default App;
