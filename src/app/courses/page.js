import Courses from '@/Components/LandingPage/Courses/Courses'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Courses />
      <Footer/>
    </div>
  )
}

export default page
