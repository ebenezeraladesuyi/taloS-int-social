// import React from 'react';
import lady from "../../assets/images/pharmacist.png";
import { AiOutlineLike, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const homePage = () => {
  return (
    <div className="w-full mt-[100px]  min-h-screen pb-5 flex flex-col justify-cente items-center overflow-hidden">

        {/* <h5 className=" w-full ml-[30px] font-semibold text-[#1a73e8] mb-[10px] text-left">WELCOME.</h5> */}

        <div className="w-[90%] flex gap-4 justify-center items-center">

            {/* <h5 className="w-[40px] h-[40px] rounded-full text-white text-[13px] hidden lg:flex justify-center items-center font-semibold bg-[#1a73e8]">EA</h5> */}

            <form className="w-full flex flex-col gap- justify-center items-center">
                <textarea className="w-full lg:w-[400px] h-[120px] rounded pl-[10px] py-[10px] text-[13px]" placeholder="Post your thought.." />

                <img className="" src="" alt="" />

                <button className="text-[#1a73e8] bg-transparent w-fu lg:w-[px] text-left">Upload Image</button>

                <button className="w-full lg:w-[400px] bg-[#1a73e8] text-white">Post</button>
            </form>
        </div>

        <div className="mt-[40px] w-[90%] lg:w-[400px] flex flex-col gap-3">
            <h5 className="w-full text-[#1a73e8] font-semibold"> ALL POSTS</h5>

            <div className="bg-white w-full py-[10px] px-[10px] rounded">
                <div className="w-full h-[220px] rounded  bg-white mb-[10px] overflow-hidden">
                    <img className="w-full" src={lady} alt="" />
                </div>

                <h5 className="mb-[5px] text-[13px]">It's a wonderful day #cuteWeather #livingMyBestLife</h5>

                <div className="flex w-[80%] justify-between items-center">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <div className="text-[13px]">
                            <FaRegComment />
                        </div>
                        <h6 className="text-[11px]">comment</h6>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <div className="text-[13px]">
                            <AiOutlineRetweet />
                        </div>
                        <h6 className="text-[11px]">retweet</h6>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer
                    ">
                        <div className="text-[13px]">
                            <AiOutlineLike />
                        </div>
                        <h6 className="text-[11px]">like</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default homePage