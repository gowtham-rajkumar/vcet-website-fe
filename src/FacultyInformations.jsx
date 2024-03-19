import React from "react";
const FacultyInformations = (Props) => {
  return (
    <div className="faculty-informations">
      <div className="faculty-img">
        <img src={Props.img} alt="faculty-img" />
      </div>
      <div className="faculty-details">
        <h3>{Props.name}</h3>
        <p className="faculty-position">{Props.position}</p>
        <p className="faculty-description">{Props.description}</p>
      </div>
    </div>
  );
};

export default FacultyInformations;
