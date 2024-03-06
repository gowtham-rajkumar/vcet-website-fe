import React from 'react'
import HomeTop from '../HomeTop.js'
import LatestCourseSlider from '../LatestCourseSlider.js'
import Footer from '../Footer.js'
import CourseList from '../CourseList.js'

export const Home = () => {
  return (
    <>
    <div>
    <HomeTop />
    <LatestCourseSlider />
    <CourseList />
    <Footer />
    </div>
   
    </>
  )
}
