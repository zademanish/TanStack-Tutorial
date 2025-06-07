import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className='container mx-auto'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout