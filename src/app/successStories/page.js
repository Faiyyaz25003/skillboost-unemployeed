import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import SuccessStories from '@/Components/LandingPage/SuccessStory/SuccessStory'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SuccessStories />
      <Footer/>
    </div>
  )
}

export default page
