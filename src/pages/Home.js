import React from "react";
import HomeTop from "../HomeTop.js";
import Slider from "../Slider.js";
import {
  ugCourseData,
  ugCourse_HeadingBox,
  pgCourseData,
  pgCourse_HeadingBox,
  feedbackHeadingBox,
  mouData,
  feedbackData,
  mou_HeadingBox,
  imgGalleryData,
  imgGallery_HeadingBox,
  removeArrow1,
  removeArrow2,
} from "../Data.js";
import Course from "../Course.js";
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import StudentFeedback from "../StudentFeedack.js";
import Footer from "../Footer.js";
import Mou from "../Mou.js";
import { feedbackResponsive, responsive, mouResponsive } from "../Data.js";

const Home = () => {
  //UG_Course_List
  const ugCourseList = ugCourseData.map((item) => (
    <Course
      img={item.img}
      program={item.program}
      dept={item.dept}
      description={item.description}
      key={item.id}
    />
  ));

  //PG_Course_List
  const pgCourseList = pgCourseData.map((item) => (
    <Course
      img={item.img}
      program={item.program}
      dept={item.dept}
      description={item.description}
      key={item.id}
    />
  ));
  //Student_Feedback_List
  const feedbackList = feedbackData.map((item) => (
    <StudentFeedback
      image={item.image}
      description={item.description}
      name={item.studentName}
      position={item.position}
      key={item.id}
    />
  ));

  //MOU_List
  const mouList = mouData.map((item) => <Mou img={item.img} key={item.id} />);

  //Image_Gallery_List
  const imgGalleryList = imgGalleryData.map((item) => (
    <Mou img={item.img} key={item.id} />
  ));
   //Faculty_Information_List

  //  const facultyImformationList{
  //  }
  return (
    <>
      <div>
        <HomeTop />

        <Slider
          CourseList={ugCourseList}
          heading={ugCourse_HeadingBox.heading}
          description={ugCourse_HeadingBox.description}
          backgroundImage={backgroundImage}
          responsive={responsive}
          removeArrow={removeArrow1}
        />

        <Slider
          CourseList={pgCourseList}
          heading={pgCourse_HeadingBox.heading}
          description={pgCourse_HeadingBox.description}
          backgroundImage={backgroundImage}
          responsive={responsive}
          removeArrow={removeArrow1}
        />

        {/* <CourseList /> */}

        <Slider
          CourseList={feedbackList}
          heading={feedbackHeadingBox.heading}
          description={feedbackHeadingBox.description}
          responsive={feedbackResponsive}
          removeArrow={removeArrow1}
        />

        <Slider
          CourseList={imgGalleryList}
          heading={imgGallery_HeadingBox.heading}
          description={imgGallery_HeadingBox.description}
          // backgroundImage = {backgroundImage}
          responsive={responsive}
          removeArrow={removeArrow1}
        />

        <Slider
          CourseList={mouList}
          heading={mou_HeadingBox.heading}
          description={mou_HeadingBox.description}
          // backgroundImage = {backgroundImage}
          responsive={mouResponsive}
          removeArrow={removeArrow2}
        />

        <Footer />
      </div>
    </>
  );
};
export default Home;
