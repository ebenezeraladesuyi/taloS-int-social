import React from 'react'

interface iOrder {
    iconLogo : string;
    step: string;
    description: string;
}

const OrderCardProps:React.FC<iOrder> = ({iconLogo, step, description}) => {
  return (
    <div className="bg-white shadow-md h-[250px] w-[90%] lg:w-[30%] flex flex-col items-center rounded-md justify-center gap-4">

        <div className='bg-[#e6ecee] w-[50px] h-[50px] rounded-2xl flex justify-center items-center'>
            <img className='w-[18px]' src={iconLogo} alt="" />
        </div>

        <h5 className='text-[#0a4757] text-center font-semibold text-[16px] lg:text-[18px]'>{step}</h5>

        <h6 className='text-[#0a4757] text-center font-semibold text-[12px] lg:text-[14px] w-[80%] sm:w-[60%] lg:w-[70%]'>
            {description}
        </h6>

    </div>
  )
}

export default OrderCardProps