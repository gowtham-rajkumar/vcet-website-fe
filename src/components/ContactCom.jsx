import "./ContactComStyles.css";
import Footer from "../components/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
// import { FaGreaterThan } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Contact = () => {
  function handlesubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      {/* <Navbar /> */}
      <section className="contact-sec">
        <div className="contact-con">
          <div>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="subNav-container">
          <div className="heading">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-elements">
            <ul>
              <li>
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                {/* <FaGreaterThan /> */}
                <i className="fa fa-greater-than"></i>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="map-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1512867874553!2d77.6716318731786!3d11.323650748865502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e92a5dbc371%3A0xf72927fc37ab9b0a!2sVelalar%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1709187040059!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="add-container">
          <div className="inner-container">
            <div className="add-heading">How To Reach Us</div>

            <div className="inner-add">
              <div className="div-one">
                <ul>
                  <li className="map-loc-icon">
                    <IoLocationOutline /> Maruthi Nagar
                  </li>
                  <li>Thindal</li>
                  <li>Erode</li>
                  <li>Tamilnadu</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="small-div">
                    <BsTelephone /> 0424-2244201 /02
                  </li>
                  <li className="small-div">
                    <BsPrinter /> +01 123 456 78
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="small-div">
                    <IoMailOutline />
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#666",
                      }}
                      href="mailto:vcetece@gmail.com"
                    >
                      vcetece@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="form-div">
          <div class="left-containerr">{/* <img src={clgImg} alt="" /> */}</div>
          <div className="right-containerr">
            <div className="form-container">
              <form
                action="contact.html"
                onSubmit={(event) => handlesubmit(event)}
              >
                <div className="row">
                  <h2>Send Us An Email</h2>
                  <div className="single-div-Contact">
                    <label>
                      Your Name <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="single-div-Contact">
                    <label>
                      Your E-Mail <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="single-div-Contact">
                    <label>Phone Number</label>
                    <input type="text" />
                  </div>
                  <div className="single-div-Contact">
                    <label>Subject</label>
                    <input type="text" />
                  </div>
                  <div className="single-div-Contact">
                    <label>Message</label>
                    <textarea name="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default Contact;
