import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import Recruiter from '@/Components/LandingPage/Recruiters/Recruiters'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Recruiter />
      <Footer/>
    </div>
  )
}

export default page
