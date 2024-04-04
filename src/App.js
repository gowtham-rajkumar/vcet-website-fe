import Contact from "./components/ContactCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./components/AboutCom";
import Events from "./pages/Events";
import EceDepartment from "./components/EceDepartment";
import OtherDepartment from "./components/OtherDepartments";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
       {/* <ToastContainer></ToastContainer> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/otherdepartment" element={<OtherDepartment />} />
          <Route path="/registrationpage" element={<RegistrationPage />}/>
          <Route path ="/ecedepartment" element={<EceDepartment />} />
            

        </Routes>
      </Router>
    </>
  );
}
export default App;
