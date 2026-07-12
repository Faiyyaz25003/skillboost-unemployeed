import Footer from '@/Components/Layout/Footer/Footer'
import Navbar from '@/Components/Layout/Navbar/Navbar'
import Trainner from '@/Components/Trainner/Trainner'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Trainner />
      <Footer/>
    </div>
  )
}

export default page
