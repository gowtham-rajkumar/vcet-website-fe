import React from "react";
import "./EceDepartmentStyles.css";
import FacultyInformations from "./FacultyInformations.jsx";
import Slider from "../Slider.js";
import background from "../Images/electronic.jpg";
import {
  facultyData,
  facultyHeadingBox,
  responsive,
  removeArrow1,
} from "../Data.js";
import CourseList from "./LabList.jsx";
const Practice = () => {
  const facultyInformationList = facultyData.map((item) => (
    <FacultyInformations
      key={item.id}
      img={item.img}
      name={item.name}
      position={item.position}
      description={item.description}
    />
  ));
  return (
    <>
      <div className="dep-heading">
        <h1>THE DEPARTMENT OF ELECTRONICS AND COMMUNICATION</h1>
      </div>
      <CourseList />
      <Slider
        CourseList={facultyInformationList}
        heading={facultyHeadingBox.heading}
        description={facultyHeadingBox.description}
        backgroundImage={background}
        responsive={responsive}
        removeArrow={removeArrow1}
      />
    </>
  );
};
export default Practice;
