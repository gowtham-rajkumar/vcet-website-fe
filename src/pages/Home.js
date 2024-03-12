import React from 'react';
import HomeTop from '../HomeTop.js';
import LatestCourseSlider from '../LatestCourseSlider.js';
import CourseList from '../CourseList.js';
import { UG_CourseData, UG_CourseHeadingBox, PG_CourseData, PG_CourseHeadingBox,FeedbackHeadingBox, Mou_Data,StudentSay } from '../Data.js';
import Course from '../Course.js';
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import StudentFeedback from '../StudentFeedack.js';
import Footer from '../Footer.js';
import Mou from '../Mou.js';
import { FeedbackResponsive,responsive,MouResponsive } from '../Data.js';


 const Home = () => {

  //UG_CourseList
  const UG_CourseList = UG_CourseData.map(item => 
    <Course 
        img = {item.img}
        program = {item.program}
        dept = {item.dept}
        description = {item.description}
        key = {item.id}
    />
    );

    //PG_CourseList
    const PG_CourseList = PG_CourseData.map(item => 
      <Course 
          img = {item.img}
          program = {item.program}
          dept = {item.dept}
          description = {item.description}
          key = {item.id}
      />
      );
      const FeedbackList = StudentSay.map(item =>
        <StudentFeedback 
        image={item.image}
        description={item.description}
        name={item.studentName}
        position={item.position}  
        key={item.id}   
  
        />
      )

    //Mou_List
    const Mou_List = Mou_Data.map(item =>
      <Mou
        img = {item.img}
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
        responsive = {responsive}
      />

      <LatestCourseSlider
        CourseList = {PG_CourseList}
        heading = {PG_CourseHeadingBox.heading}
        description = {PG_CourseHeadingBox.description}
        backgroundImage={backgroundImage}
        responsive = {responsive}
      />

      <CourseList />

      <LatestCourseSlider
        CourseList = {Mou_List}
        heading = {PG_CourseHeadingBox.heading}
        description = {PG_CourseHeadingBox.description}
        // backgroundImage = {backgroundImage}
        responsive = {MouResponsive}
      />

      <LatestCourseSlider 
       CourseList={FeedbackList} 
       heading={FeedbackHeadingBox.heading}
       description={FeedbackHeadingBox.description}
       responsive={FeedbackResponsive} 
       />

      <Footer />
    </div>
   
    </>
  )
}
export default Home