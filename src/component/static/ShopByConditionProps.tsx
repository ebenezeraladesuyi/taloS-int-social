import React from 'react'

interface iProducts {
    conditionImage : string;
    conditionName: string;
}

const ShopByConditionProps:React.FC<iProducts> = ({conditionImage, conditionName}) => {

  return (
    <div className="bg-white h-[200px]  w-[250px] flex flex-col items-cen rounded-md justify-between gap-4 font-mont mb-[25px] ml-[20px] sm:ml-[35px] lg:ml-[20px]">

            <img className='w-full' src={conditionImage} alt="" />

            <h6 className="text-[#0a4757] text-[14px] font-bold">
                {conditionName}
            </h6>

    </div>
  )
}

export default ShopByConditionProps