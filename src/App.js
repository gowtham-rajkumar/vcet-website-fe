import Contact from "./ContactCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import  Home  from "./pages/Home";
import  Courses  from "./pages/Courses";
import About from './AboutCom';
import Events from "./pages/Events.js";


function App() {
  return (
    <>
      <Router>
        {/* <div className="App"> */}
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Courses" Component={Courses} />
          <Route path="/About" Component={About} />
          <Route path="/Events" Component={Events} />
        </Routes>

        {/* </div> */}
      </Router>
    </>
  );
}
export default App;
