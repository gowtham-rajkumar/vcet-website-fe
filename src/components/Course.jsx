import React from "react";
const Course = (props) => {
  return (
    <div className="LatestCourseCard">
      <div className="LatestCourse-image">
        <img src={props.img} alt="Department_Image" />
      </div>
      <h3>
        {props.program} - <span>{props.dept}</span>
      </h3>
      <p className="LatestCourseName">{props.description}</p>
      <p className="LastestCourseDig">
        <a href={props.learnmore} target="_blank">
          DIG DEEPER <i className="fa fa-angle-right"></i>
        </a>
      </p>
    </div>
  );
};

export default Course;
