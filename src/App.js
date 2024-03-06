import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";


import CourseList from './CourseList';
import LatestCourseSlider from './LatestCourseSlider';
import HomeTop from './HomeTop';
import Footer from './Footer';
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
        </Routes>
        {/* </div> */}
        
      </Router>
    </>

  );
}
export default App;
