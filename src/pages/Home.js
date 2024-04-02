import React from "react";
import HomeTop from "../components/HomeTop";
import Slider from "../components/Slider";
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
} from "../Data";
import Course from "../components/Course";
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import StudentFeedback from "../components/StudentFeedack";
import Footer from "../components/Footer";
import Mou from "../components/Mou";
import { feedbackResponsive, responsive, mouResponsive } from "../Data";
import Whychoose from "../components/Whychoose";

const Home = () => {
  //UG_Course_List
  const ugCourseList = ugCourseData.map((item) => (
    <Course
      img={item.img}
      program={item.program}
      dept={item.dept}
      description={item.description}
      key={item.id}
      learnmore ={item.learnmore}
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
      learnmore ={item.learnmore}
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
  const mouList = mouData.map((item) => (
    <Mou img={item.img} key={item.id} classelection={item.classelection} />
  ));

  //Image_Gallery_List
  const imgGalleryList = imgGalleryData.map((item) => (
    <Mou img={item.img} key={item.id} classelection={item.classelection} />
  ));
  //Faculty_Information_List

  //  const facultyImformationList{
  //  }
  console.log(imgGalleryData.map((item) => item.classelection));
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
        <Whychoose />

        <Slider
          CourseList={imgGalleryList}
          heading={imgGallery_HeadingBox.heading}
          description={imgGallery_HeadingBox.description}
          // backgroundImage = {backgroundImage}
          responsive={responsive}
          removeArrow={removeArrow1}
        />
        <Slider
          CourseList={feedbackList}
          heading={feedbackHeadingBox.heading}
          description={feedbackHeadingBox.description}
          responsive={feedbackResponsive}
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
