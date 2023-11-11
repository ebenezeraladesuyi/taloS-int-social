import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

interface iNews {
    newsImage : string;
    newsHeadline : string;
    newsDetails : string;
}

const NewsCardProps:React.FC<iNews> = ({newsImage, newsHeadline, newsDetails}) => {
  return (
    <div className='w-[250px] h-[320px] flex flex-col justify-between pb-[25px] rounded shadow-md overflow-hidden font-mont mb-[25px] ml-[20px] sm:ml-[35px] lg:ml-[20px]'>
        
        <div className='h-[55%] rounded-none '>
            <img className='h-[100%] w-full' src={newsImage} alt="pharmaHub" />
        </div>

        <h6 className='text-[12px] ml-[13px] font-semibold text-[#0a4757] w-[85%] mt-[25px]'>{newsHeadline}</h6>

        <h6 className='text-[10px] text-justify ml-[13px] text-[#0a4757] w-[85%] mt-[10px]'>{newsDetails}</h6>

        <button className='bg-transparent flex w-[120px] items-center pl-0 ml-[13px]'>
            <h6 className='text-[11px] text-[#0a4757] mr-[5px]'>Read More</h6>
            <div className='text-[13px]'>
                <FiArrowUpRight />
            </div>
        </button>
    </div>
  )
}

export default NewsCardProps