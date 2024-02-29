import React from 'react';
import './LatestCourseSlider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';

import { useSwipeable } from 'react-swipeable';

const LatestCourseSlider = () => {

    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handlers = useSwipeable({
        onSwiping: () => {setIsDragging(true)},
        onSwiped: () => {setIsDragging(false)}
      });


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
            <>
            <section className='Latest-Courses-Area'>

            <div className='LatestCourseContainer'>

            <div className='LatestCourseTitleBox'>
                <h1>UG Programmes</h1>
                <p>Empower your trajectory with our renowned UG programmes</p>
            </div>
            <div className='LatestCourseContainer'>
            <div
                className="LatestCourseSliderBox"
                id={isDragging ? 'LatestCourseDragging' : ''}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                {...handlers}
            >
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    //ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={!isDragging}
                    autoPlaySpeed={3000}
                    //keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    //deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?1"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>BME</span></h3>
                        <p className='LatestCourseName'>Innovating health solutions for tomorrow's medical advancements.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?2"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>Civil</span></h3>
                        <p className='LatestCourseName'>Building the world with precision and sustainability in mind.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?3"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>CSE</span></h3>
                        <p className='LatestCourseName'>Transforming ideas into cutting-edge technology for a digital future.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?4"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>EEE</span></h3>
                        <p className='LatestCourseName'>Powering technological innovations shaping our electrifying world.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?5"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>ECE</span></h3>
                        <p className='LatestCourseName'>Empowering global connectivity through integrated electronic systems.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?6"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>Mech</span></h3>
                        <p className='LatestCourseName'>Engineering excellence driving industries forward with innovative solutions.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?7"
                                alt="" 
                            />
                        </div>
                        <h3>B.E - <span>MDE</span></h3>
                        <p className='LatestCourseName'>Pioneering medical technology for healthier tomorrows.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?8"
                                alt="" 
                            />
                        </div>
                        <h3>B.Tech - <span>AIDS</span></h3>
                        <p className='LatestCourseName'>Unleashing the potential of data with AI for transformative insights.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?9"
                                alt="" 
                            />
                        </div>
                        <h3>B.Tech - <span>AIML</span></h3>
                        <p className='LatestCourseName'>Harnessing AI to create intelligent systems for a smarter world.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                    <div className='LatestCourseCard'>
                        <div className='LatestCourse-image'>
                            <img
                                src="https://source.unsplash.com/random/500x250/?animal?10"
                                alt="" 
                            />
                        </div>
                        <h3>B.Tech - <span>IT</span></h3>
                        <p className='LatestCourseName'>Empowering the digital era with cutting-edge IT solutions and innovations.</p>
                        <p className='LastestCourseDig'><a href="https://www.w3school.com">DIG DEEPER <i className="fa fa-angle-right"></i></a></p>
                    </div>

                </Carousel>
            </div>

            </div>

            
            </div>  
            </section> 
            </>

    );
}

export default LatestCourseSlider;