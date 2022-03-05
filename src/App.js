import './index.css';
import Header from "./components/Header";
import Navigation from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

      <Navigation />
      <Header />

    </div>
    </>
  );
}

export default App;
