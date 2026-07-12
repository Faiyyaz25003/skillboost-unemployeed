import Login from '@/Components/Auth/Login/Login'
import Blog from '@/Components/Blog/Blog'
import Footer from '@/Components/Layout/Footer/Footer'
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
