import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../utils/Apis";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DataLoading from '../isLoading/DataLoading';
import { User } from "../../hooks/global/ReduxState";
import { UseAppDispatch } from "../../hooks/global/Store";
// import {  useNavigate } from "react-router-dom";

const Signup = () => {

    const [showPassword, setshowPassword] = React.useState(false);
  
    const fn = () => [setshowPassword(!showPassword)];

    

    const dispatch = UseAppDispatch();
    // const navigate = useNavigate();

    const schema = yup
        .object({
            email : yup.string().required("input a valid email"),
            password : yup.string().min(8).required("create a password"),
        })
        .required();

        type formData = yup.InferType<typeof schema>;

        const posting = useMutation({
            mutationKey: ['iStandUser'],
            mutationFn: signup,


            onSuccess: (data) => {

                dispatch(User(data.data))

                // console.log(data)

                if (data.message === "user created") {
                  Swal.fire({
                    title: "Account Created",
                    text: "Thank You for coming onboard",
                    icon: "success",
                  });
                //   navigate("/signin");
                }
                if (data.response.data.err === "This user already exist") {
                  Swal.fire({
                    icon: "error",
                    title: "User already exist",
                    text: `${data.response.data.err}`,
                  });
                }
                if (data.message === "Network Error") {
                  Swal.fire({
                    icon: "error",
                    title: `${data.message}`,
                    text: "Please Check Your Internet Connection",
                  });
                }
              },

        });

        const {
          handleSubmit,
          formState: { errors },
        //   reset,
          register,
        } = useForm<formData>({
          resolver: yupResolver(schema),
        });


        const Submit = handleSubmit(async (data) => {
          posting.mutate(data);

        //   console.log(data)
        });
  
    return (
      <div className="w-full h-screen flex justify-center items-center">
          <div className="w-[300px] lg:w-[400px] h-[350px] shadow-md rounded-md flex flex-col justify-center items-center py-[20px] px-[20px]">
              <h2 className="font-semibold text-center text-[18px]">Talosmart</h2>
  
              <h2 className='text-[#1a73e8] font-semibold text-[22px] mt-[15px]'>Signup</h2>
  
              <form className='w-[90%] flex  flex-col justify-center items-center gap-3 mt-4' action="" onSubmit={Submit}>

                  <input className='w-full h-[45px] shadow rounded outline-none px-[10px] text-[13px]' type="text" placeholder="Email" 
                  {...register("email")}
                    />
                    <p className='text-[7px] mt-[-7px]'>
                        {errors?.email && errors?.email?.message}
                    </p>
  
                  <div className='w-full h-[45px] shadow rounded flex justify-between items-center px-[10px] outline-none'>
                      <input type={showPassword ? "text" : "password"} className='text-[13px] outline-none' placeholder="Password" 
                      {...register("password")}
                        />
  
                      {showPassword ? (
                              <div onClick={fn}>
                                <AiOutlineEye />
                              </div>
                          ) : (
                              <div onClick={fn}>
                                <AiOutlineEyeInvisible />
                              </div>
                      )}
                  </div>
                        <p className='text-[7px] mt-[-7px]'>
                            {errors?.password && errors?.password?.message}
                        </p>
  
                {
                   posting.isPending ? (
                    <>
                        <DataLoading />
                    </>
                   ) : (
                    <button className='h-[47px] w-full bg-[#1a73e8] text-white font-semibold outline-none' type='submit'>Signup</button>

                   )
                }
              </form>
  
              <h2 className='text-[14px] mt-4'>Already have an Account? <NavLink to="/"><span className='text-[#1a73e8] cursor-pointer '>Signin</span></NavLink></h2>
          </div>
      </div>
    )
  }

export default Signup