import React from 'react';
import HomeTop from '../HomeTop.js';
import LatestCourseSlider from '../LatestCourseSlider.js';
import CourseList from '../CourseList.js';
import { UG_CourseData, UG_CourseHeadingBox, PG_CourseData, PG_CourseHeadingBox } from '../Data.js';
import Course from '../Course.js';
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import Footer from '../Footer.js';


 const Home = () => {

  const UG_CourseList = UG_CourseData.map(item => 
    <Course 
        img = {item.img}
        program = {item.program}
        dept = {item.dept}
        description = {item.description}
        key = {item.id}
    />
    );

    const PG_CourseList = PG_CourseData.map(item => 
      <Course 
          img = {item.img}
          program = {item.program}
          dept = {item.dept}
          description = {item.description}
          key = {item.id}
      />
      );

  return (
    <>
    <div>
      <HomeTop />

      <LatestCourseSlider 
        CourseList = {UG_CourseList}
        heading = {UG_CourseHeadingBox.heading}
        description = {UG_CourseHeadingBox.description}
        backgroundImage={backgroundImage}
      />

      <LatestCourseSlider 
        CourseList = {PG_CourseList}
        heading = {PG_CourseHeadingBox.heading}
        description = {PG_CourseHeadingBox.description}
        backgroundImage={backgroundImage}
      />

      <CourseList />

      <Footer />
    </div>
   
    </>
  )
}
export default Home