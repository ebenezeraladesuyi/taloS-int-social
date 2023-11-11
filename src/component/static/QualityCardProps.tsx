import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

interface iQuality {
    title : string;
    description : string;
    buttonContent : string;
    image : string;
}


const QualityCardProps:React.FC<iQuality> = ({title, description, buttonContent, image}) => {
  return (
    <div className="bg-white shadow-md h-[350px] lg:h-[500px] sm:h-[400px] w-[90%] lg:w-[45%] flex flex-col items-cen rounded-md justify-between gap-4">

        <h5 className='mt-[22px] ml-[15px] text-[14px] lg:text-[17px] font-bold text-[#0a4757]'>{title}</h5>

        <h6 className='ml-[15px] text-[12px] lg:text-[14px] mt-[-10px] text-[#0a4757] w-[70%] sm:w-[55%]'>{description}</h6>

        <button className='flex items-center gap-2 w-[160px] lg:w-[190px] h-[40px] lg:h-[50px] ml-[15px] text-[10px] lg:text-[12px] bg-[#0a4757] mt-[-7px] mb-[7px] rounded-none text-white'>{buttonContent} <FiArrowUpRight /></button>

        <img className='overflow-hidden rounded-b-md' src={image} alt="pharmaHub" />
    </div>
  )
}

export default QualityCardProps