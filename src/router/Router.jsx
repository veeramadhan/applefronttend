import React from 'react'
import { Routes, Route } from "react-router-dom"
import Hr from '../pages/components/Login/Hr/Hr'
import MainFooter from '../pages/MainFooter/MainFooter'
import MainNav from '../pages/MainNav/MainNav'
import LandingPage from '../pages/LandingPage/LandingPage'

function Router() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>

    </>
  )
}

export default Router
