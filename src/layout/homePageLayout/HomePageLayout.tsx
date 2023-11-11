// import React from 'react'

import { Outlet } from "react-router-dom"
import {  Header } from "../../component"
import Sidebar from "../../pages/sideBar/Sidebar"
// import Otherbar from "../../pages/sideBar/Otherbar"

const HomePageLayout = () => {
  return (
    <div className="w-full bg-[#d7e7fb]">

        <Header />

        <div className="flex justify-between w-full">
          <div className="hidden lg:block w-[]"><Sidebar /></div>

          <div className="lg:w-[78%] w-full"><Outlet /></div>

          {/* <div><Otherbar /></div> */}

        </div>

    </div>
  )
}

export default HomePageLayout