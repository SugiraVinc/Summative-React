import React from 'react'
import Header from '../components/Header'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <>
     <Header/>
     <ToastContainer/>
     <Outlet/> 
    </>
  )
}

export default MainLayout
