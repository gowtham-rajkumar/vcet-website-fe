import React from 'react';
import HomeTop from '../HomeTop.js';
import LatestCourseSlider from '../LatestCourseSlider.js';
import { UG_CourseData, UG_CourseHeadingBox, PG_CourseData, PG_CourseHeadingBox,FeedbackHeadingBox, Mou_Data,FeedbackData , MOU_HeadingBox, imgGalleryData, imgGallery_HeadingBox, removeArrow1, removeArrow2} from '../Data.js';
import Course from '../Course.js';
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import StudentFeedback from '../StudentFeedack.js';
import Footer from '../Footer.js';
import Mou from '../Mou.js';
import { FeedbackResponsive,responsive,MouResponsive } from '../Data.js';


 const Home = () => {

  //UG_Course_List
  const UG_CourseList = UG_CourseData.map(item => 
    <Course 
        img = {item.img}
        program = {item.program}
        dept = {item.dept}
        description = {item.description}
        key = {item.id}
    />
    );

    //PG_Course_List
    const PG_CourseList = PG_CourseData.map(item => 
      <Course 
          img = {item.img}
          program = {item.program}
          dept = {item.dept}
          description = {item.description}
          key = {item.id}
      />
      );
      const FeedbackList = FeedbackData.map(item =>
        <StudentFeedback 
        image={item.image}
        description={item.description}
        name={item.studentName}
        position={item.position}  
        key={item.id}   
  
        />
      )

    //MOU_List
    const Mou_List = Mou_Data.map(item =>
      <Mou
        img = {item.img}
        key = {item.id}
      />
    );

    //Image_Gallery_List
    const imgGalleryList = imgGalleryData.map(item =>
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
        removeArrow = {removeArrow1}
      />

      <LatestCourseSlider
        CourseList = {PG_CourseList}
        heading = {PG_CourseHeadingBox.heading}
        description = {PG_CourseHeadingBox.description}
        backgroundImage={backgroundImage}
        responsive = {responsive}
        removeArrow = {removeArrow1}
      />

      {/* <CourseList /> */}

      <LatestCourseSlider 
       CourseList={FeedbackList} 
       heading={FeedbackHeadingBox.heading}
       description={FeedbackHeadingBox.description}
       responsive={FeedbackResponsive} 
       removeArrow = {removeArrow1}
       />

      <LatestCourseSlider
        CourseList = {imgGalleryList}
        heading = {imgGallery_HeadingBox.heading}
        description = {imgGallery_HeadingBox.description}
        // backgroundImage = {backgroundImage}
        responsive = {responsive}
        removeArrow = {removeArrow1}
      />

      <LatestCourseSlider
        CourseList = {Mou_List}
        heading = {MOU_HeadingBox.heading}
        description = {MOU_HeadingBox.description}
        // backgroundImage = {backgroundImage}
        responsive = {MouResponsive}
        removeArrow = {removeArrow2}
      />

      <Footer />
    </div>
   
    </>
  )
}
export default Home