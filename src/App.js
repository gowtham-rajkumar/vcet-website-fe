import Contact from "./ContactCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import  Home  from "./pages/Home";
import  Courses  from "./pages/Courses";
import About from './AboutCom';
import Events from "./pages/Events.js";
import EceDepartment from './EceDepartment.jsx'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eceDepartment" element={<EceDepartment />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
