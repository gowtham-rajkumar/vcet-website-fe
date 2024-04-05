import React from "react";
import "./EceDepartmentStyles.css";
import FacultyInformations from "./FacultyInformations.jsx";
import Slider from "../components/Slider";
import background from "../Images/electronic.jpg";
import Footer from "./Footer.jsx";
import { auth } from "../Firebase.js";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import {
  facultyData,
  facultyHeadingBox,
  responsive,
  removeArrow1,
} from "../Data.js";
import LabList from "./LabList.jsx";
const Practice = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/loginpage");
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="logout-container">
        <button onClick={handleLogout}> <MdLogout className="log-svg"/>Logout</button>
      </div>
      <LabList />
      <Slider
        CourseList={facultyInformationList}
        heading={facultyHeadingBox.heading}
        description={facultyHeadingBox.description}
        backgroundImage={background}
        responsive={responsive}
        removeArrow={removeArrow1}
      />
      <Footer />
    </>
  );
};
export default Practice;
