// import React from 'react'

import { BallTriangle } from "react-loader-spinner";

const IsLoading = () => {

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        <i style={{fontSize:"15px", color:"#0a4757", marginBottom:"40px"}}>TalosSocials</i>

        <BallTriangle color="#0a4757" width="80" visible={true} />

        <i style={{fontSize:"17px", color:"#0a4757", marginTop:"40px"}}>Loading...</i>

    </div>
  )
}

export default IsLoading