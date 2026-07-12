import Login from '@/Components/LandingPage/Auth/Login/Login'
import Blog from '@/Components/LandingPage/Blog/Blog'
import Footer from '@/Components/LandingPage/Layout/Footer/Footer'
import React from 'react'

function page() {
  return (
    <div>
      <Login/>
      <Blog />
      <Footer/>
    </div>
  )
}

export default page
