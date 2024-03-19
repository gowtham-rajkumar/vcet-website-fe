import React from "react";
import "./PracticeStyles.css";
import FacultyInformations from "./FacultyInformations";
import Slider from "./Slider";
import background from "./Images/electronic.jpg";
import {
  facultyData,
  facultyHeadingBox,
  responsive,
  removeArrow1,
} from "./Data.js";
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
    <Slider
      CourseList={facultyInformationList}
      heading={facultyHeadingBox.heading}
      description={facultyHeadingBox.description}
      backgroundImage={background}
      responsive={responsive}
      removeArrow={removeArrow1}
    />
  );
};
export default Practice;
