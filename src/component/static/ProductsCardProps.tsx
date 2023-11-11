import React from 'react'

interface iProducts {
    productImage : string;
    productName: string;
    productPrice : string;
}

const ProductsCardProps:React.FC<iProducts> = ({productImage, productName, productPrice}) => {
  return (
    <div className="bg-white  h-[290px]  w-[250px] shadow-md flex flex-col items-cen rounded-md justify-between gap-4 font-mont 
    mb-[25px] ml-[20px] sm:ml-[35px] lg:ml-[20px]"
    >

        <div className='bg-white shado h-[55%] flex justify-center items-center'>
            <img className='w-[95px]' src={productImage} alt="" />
        </div>

        <div className='pl-[20px] pb-[20px] pt-[15px] bg-[#edebf0] w-full '>
            <h6 className="text-[#0a4757] text-[14px] font-bold">{productName}</h6>

            <h6 className="text-[#0a4757] text-[13px]  mt-[3px]">{productPrice}</h6>

            <button className='border-red-500 text-red-500 text-[12px] bg-transparent mt-[7px] pt-'>Add to Cart</button>
        </div>

    </div>
  )
}

export default ProductsCardProps