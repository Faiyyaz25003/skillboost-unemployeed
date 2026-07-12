import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
import Recruiter from '@/Components/Recruiters/Recruiters'
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
