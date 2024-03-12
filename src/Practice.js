import React from "react";
import "./PracticeStyles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FeedbackResponsive as res } from "./Data.js";
import { useState } from "react";
import { StudentSay } from "./Data.js";
const Practice = () => {
  const [isGrab, setisGrab] = useState(false);

  const handleMouseUp = () => {
    setisGrab(false);
  };
  const handleMouseDown = () => {
    setisGrab(true);
  };
  return (
    <>
      <div
        className="grabbing-class"
        id={isGrab ? "grabed" : ""}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Carousel
          responsive={res}
          showDots={false}
          swipeable={true}
          draggable={true}
          //ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={!isGrab}
          autoPlaySpeed={3000}
          //keyBoardControl={true}
          customTransition="transform 400ms ease-in-out, opacity 300ms linear"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {StudentSay.map((data) => (
            <div className="std-Container">
              <div className="stdTopContainer">
                <div className="stdImg">
                  <img src={data.image} alt="student Img" />
                </div>
              </div>

              <div className="stdBottomContainer">
                <div className="std-para">
                  <p>{data.description}</p>
                  <h3>
                    <span>{data.studentName}</span>
                    {data.position}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default Practice;
