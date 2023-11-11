import React from 'react'
// import logo from "../../../assets/images/pharmaHubLogo.png";
// import { BsHeadphones } from "react-icons/bs"
// import { PiShoppingCartSimpleBold } from "react-icons/pi"
// // import { BsPerson }
// import { BiSearch } from "react-icons/bi"
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/global/Store';


const Header = () => {

  const online = useAppSelector((state) => state?.currentUser)

    const [dropdown, setDropdown] = React.useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className="w-full h-[70px] flex flex-col justify-center items-center bg-white font-mont fixed z-50 shadow-md">

        <div className="w-[90%] h-full flex justify-between items-center">

            <h5 className='text-[16px] lg:text-[18px] font-semibold'>TaloSmart</h5>

            <div className="hidden lg:flex gap-6 mr-[30px] items-center">
                    <ol className="cursor-pointer text-[14px] text-[#1f2035]  hover:text-red-500  transition ease-out duration-300 hover:animate-pulse transform hover:scale-125">Home</ol>
            </div>

            { 
            online ? <NavLink to="/"><button className="text-white w-[120px] bg-[#1a73e8] hover:bg-transparent hover:text-[#1f2035] hover:border-[1px] hover:border-[#1f2035] transition ease-in-out duration-500 mt-[px] hidden lg:flex justify-center items-center">
                        Log out
                    </button></NavLink> 
                : null 
            }

            { dropdown ?

                <div className="lg:hidden text-[22px] cursor-pointer text-[#1f2035] ml-[6px]" onClick={showDropdown}>
                    <MdClose /> 
                </div>
            :
                <div className="lg:hidden text-[22px] cursor-pointer text-[#1f2035] ml-[6px]" onClick={showDropdown}>
                    <HiMenuAlt3 /> 
                </div>
            }
            
        </div>

        { dropdown ? 

            <div className="lg:hidden w-full h-[100vh] absolute top-[115px] bg-white transition ease-in-out duration-100 " onClick={showDropdown}>
                <div className="w-full h-[320px]  flex flex-col pl-[15px] sm:pl-[35px] pt-[25px] gap-4 text-[#1f2035]">
                    <ol className="cursor-pointer text-[14px] ">Home</ol>

                    { 
                    online ? <NavLink to="/"><button className="text-white w-[150px] bg-[#1a73e8] hover:bg-transparent hover:text-[#1f2035] hover:border-[1px] hover:border-[#1f2035] transition ease-in-out duration-500 mt-[px]">
                        Log out
                    </button></NavLink> 
                    : null 
                    }
                </div>

            {/*                 
                <hr className="w-full border-[1px] border-gray-200" />

                <h5 className=" text-[12px]">NEED HELP?</h5> */}

            </div>

        :
            null
        }

    </div>
  )
}

export default Header;