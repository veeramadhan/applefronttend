import React from 'react'
import { Routes, Route } from "react-router-dom"
import Hr from '../pages/components/Login/Hr/Hr'
import MainFooter from '../pages/MainFooter/MainFooter'
import MainNav from '../pages/MainNav/MainNav'
import LandingPage from '../pages/LandingPage/LandingPage'
import AssociateLogin from '../pages/components/Login/Associate/AssociateLogin'

function Router() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path="/associatelogin" element={<AssociateLogin/>}/>
        <Route exact path="/hr" element={<Hr/>}/>
      </Routes>

    </>
  )
}

export default Router
