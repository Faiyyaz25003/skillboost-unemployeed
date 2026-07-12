import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
import SuccessStories from '@/Components/SuccessStory/SuccessStory'
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
