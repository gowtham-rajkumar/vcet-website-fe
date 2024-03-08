import Contact from "./ContactCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import  Home  from "./pages/Home";
import  Courses  from "./pages/Courses";
import About from './AboutCom';


function App() {
  return (
    <>
      <Router>
        {/* <div className="App"> */}
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Courses" Component={Courses} />
          <Route path="/About" Component={About} />
        </Routes>

        {/* </div> */}
      </Router>
    </>
  );
}
export default App;
