import Contact from "./components/ContactCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./components/AboutCom";
import Events from "./pages/Events";
import EceDepartment from "./components/EceDepartment";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eceDepartment" element={<EceDepartment />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
