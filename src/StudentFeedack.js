import React from 'react'

const StudentFeedback =(Props) =>{
    return(
        <div className="std-Container">
        <div className="stdTopContainer">
          <div className="stdImg">
            <img src={Props.image} alt="student Img" />
          </div>
        </div>

        <div className="stdBottomContainer">
          <div className="std-para">
            <p>{Props.description}</p>
            <h3>
              <span>{Props.name}</span>
              {Props.position}
            </h3>
          </div>
        </div>
      </div>
    )
}
export default StudentFeedback;