import React from 'react'
import Course from "../Course.js";
import Slider from "../Slider.js";
import backgroundImage from "../Images/LatestCourses_bg_img.jpg";
import {
  ugCourseData,
  ugCourse_HeadingBox,
  pgCourseData,
  pgCourse_HeadingBox,
  responsive,
  removeArrow1,
} from "../Data.js";
 const Courses = () => {
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
  return (
    <>
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
        </>
  )
}
export default Courses
