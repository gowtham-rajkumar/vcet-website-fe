
import CourseList from "./CourseList";
import HomeTop from "./HomeTop";
import Navbar from "./Navbar";
import LatestCourseSlider from "./LatestCourseSlider";
import Footer from "./Footer";
// import Contact from "./Contact";
function App() {
  return (
    <div>
      <Navbar />
      <HomeTop />
      <LatestCourseSlider />
      <CourseList />
      <Footer />
      {/* <Contact /> */}
    </div>
  );
}
export default App;
