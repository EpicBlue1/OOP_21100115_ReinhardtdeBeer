import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Asgraph from "./components/AstroidGraphs";
import Dashboard from "./components/Dash/Dash";
import Header from "./components/Header";
import Footer from "./components/SubComponents/Footer/Footer";
import Navigation from "./components/SubComponents/NavigationBar/Nav";
import Timeline from "./components/TimeLinePage";
import "./index.scss";

function App() {
  return (
    <>
      <Container fluid className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Timeline" element={<Timeline />}></Route>
          <Route path="/AstroidGraphs" element={<Asgraph />}></Route>
        </Routes>

        <Footer />
      </Container>
    </>
  );
}

export default App;
