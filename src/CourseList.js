import "./CourseListStyles.css";
import { courseListData } from "./Data.js";
// import courseOne from './Images/course one.png'
// import courseTwo from './Images/course two.png'
// import courseThree from './Images/course three.png'
// import courseFour from './Images/course four.png'
// import courseFive from './Images/course five.png'
// import courseSix from './Images/course six.png'
// import imgOne from './Images/icon_course_1.png'
// import imgTwo from './Images/icon_course_2.png'
// import imgThree from './Images/icon_course_3.png'
// import imgFour from './Images/icon_course_4.png'
// import imgFive from './Images/icon_course_5.png'
// import imgSix from './Images/icon_course_6.png'
function CourseList() {
  return (
    <section className="courseList">
      <div className="top-container">
        <h1>Laboratores In Our Department</h1>
        <p>
          Circuiting Creativity : Bridging the Gap Between Imagination and
          Implementation
        </p>
      </div>

      <div className="heading-container">
        {courseListData.map((item) => (
          <div className="single-div" key={item.id}>
            <div className="img-container">
              <img src={item.image} alt="" />
            </div>
            <div className="bottom-container">
              <div className="inner-img">
                {" "}
                <img src={item.icon} alt="icon" />
              </div>

              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="https://www.djangoproject.com/">
                Dig Deeper
              </a>
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
        ))}

        {/* <div className="single-div">
                    <div className="img-container">
                        <img src={courseTwo} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgTwo} alt="" /></div>
                        <h2>Artificial intelligence and machine learning</h2>
                        <p>Develops algorithms to enable machines to learn from data, adapt, and make decisions autonomously.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>

                <div className="single-div">
                    <div className="img-container">
                        <img src={courseFour} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgFour} alt="" /></div>
                        <h2>Biomedical engineering</h2>
                        <p>Applies engineering principles to healthcare, designing devices, systems, and therapies for diagnosing and treating diseases.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>

                <div className="single-div">
                    <div className="img-container">
                        <img src={courseThree} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgThree} alt="" /></div>
                        <h2>Civil engineering</h2>
                        <p>Plans, designs, and oversees construction of public infrastructure, from roads and bridges to buildings and airports.Focuses on the design and analysis of structures like buildings, bridges, dams, and towers.</p>                   <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>

                <div className="single-div">
                    <div className="img-container">
                        <img src={courseFive} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgFive} alt="" /></div>
                        <h2>Computer science and engineering</h2>
                        <p>Focuses on software development, computer systems design, and computer networks to drive innovation and technology.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>

                <div className="single-div">
                    <div className="img-container">
                        <img src={courseSix} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgSix} alt="" /></div>
                        <h2>Electronics and communication engineering</h2>
                        <p>Designs, develops, and manages electronic systems for data communication, telecommunications, and information processing.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>

                <div className="single-div">
                    <div className="img-container">
                        <img src={courseThree} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgOne} alt="" /></div>
                        <h2>Electronics and electrical engineering</h2>
                        <p> Creates and maintains electrical systems for power generation, distribution, and control in various industries.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
                <div className="single-div">
                    <div className="img-container">
                        <img src={courseOne} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgThree} alt="" /></div>
                        <h2>Information technology</h2>
                        <p>Manages, implements, and supports technology solutions to improve efficiency, productivity, and decision-making in organizations.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
                <div className="single-div">
                    <div className="img-container">
                        <img src={courseFive} alt="" />
                    </div>
                    <div className="bottom-container">
                    <div className="inner-img"> <img src={imgFive} alt="" /></div>
                        <h2>Mechanical engineering</h2>
                        <p> Develops and designs mechanical systems and devices, from engines to manufacturing tools, to solve engineering challenges.</p>
                        <a href=".html">Dig Deeper</a>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div> */}
      </div>
    </section>
  );
}
export default CourseList;
