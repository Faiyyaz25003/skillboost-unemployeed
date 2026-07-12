import Jobs from '@/Components/Jobs/Jobs'
import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
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
