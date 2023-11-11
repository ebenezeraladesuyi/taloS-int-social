import React from 'react'
// import speed from "../../assets/images/speed.png"

interface iSpeed {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard:React.FC<iSpeed> = ({icon, title, description}) => {
  return (
    <div className="font-mont w-[90%] lg:w-[32%] flex flex-col items-center justify-center gap-4">

        <img className="w-[35px] lg:w-[40px]" src={icon} alt="" />

        <h5 className="text-[#ffcc02] text-[16px] lg:text-[18px] font-semibold">{title}</h5>

        <h6 className="text-white text-center text-[12px] lg:text-[13px] w-[90%] sm:w-[40%] lg:w-[70%]">{description}</h6>

    </div>
  )
}

export default ServiceCard