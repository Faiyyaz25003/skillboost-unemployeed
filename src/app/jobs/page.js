import Jobs from '@/Components/LandingPage/Jobs/Jobs'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import Navbar from '@/Components/LandingPage/Layout/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Jobs />
      <Footer/>
    </div>
  )
}

export default page
