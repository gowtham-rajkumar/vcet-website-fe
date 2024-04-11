import './HomeTopStyles.css';
import {useEffect} from 'react'
import TeacherImg from '../Images/header_bottom_photo.png'
import AOS from "aos";
import "aos/dist/aos.css";
// import { NavLink } from 'react-router-dom';
const HomeTop = () =>{
    useEffect(()=>{
        AOS.init({ duration: 2000 }); 
    },[])
    return(
    <section className='Total-div'>
        <div className="HomeTop">
            <div className='left-rigtht' data-aos ="fade-up">
            <div className="left-container">
            <h2 className='heading'>Education is the key to your success</h2>
            <p>Education is not merely a path to success; it is the key that unlocks doors to endless possibilities, empowering individuals to thrive, innovate, and shape a brighter future for themselves and society as a whole.</p>
           <div className='button-div'>
            <a href="https://en.wikipedia.org/wiki/Education" class="rm_btn">Learn more</a>
            {/* <a href="#" class="rm_btn">apply now</a> */}
            </div>
            </div>
            <div className="right-container">
                <div className="photo-Cotainer">
                    <div className="img">
                        <img src={TeacherImg} className='home-bottomImg' alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}
export default HomeTop;