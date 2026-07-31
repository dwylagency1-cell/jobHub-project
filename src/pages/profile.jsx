import {CircleUserRound} from 'lucide-react'
import { use, useContext } from "react";
import { UserContext } from "./userContextProvider.jsx";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
function Profile(){
    const {user} = useContext(UserContext)
    console.log(user)
    return <div className="  w-screen h-screen flex justify-center items-center">
        <div className=" h-[450px] w-[800px] flex flex-col  ">
            <div className=" h-[50px] w-[800px]">
                <h1 className="text-[25px] flex items-center">Your Profile</h1>
            </div>
            <div className=" h-[300px] w-[800px] flex flex-row">
                <div className="h-[300px] w-[300px] flex items-center justify-center">
                    <CircleUserRound strokeWidth={1} size={300}/> 

                </div>
                <div className=" h-[300px] w-[500px] flex justify-left">
                    <div className=' h-[300px] w-[200px] ml-[20px]'>
                        <div className=' w-[200px] h-[100px] flex flex-col justify-center '>
                            <p className='font-semibold'>First Name:</p>
                            <p>{user.first}</p>

                        </div>
                        <div className=' w-[200px] h-[100px] flex flex-col justify-center'>
                            <p className='font-semibold'>Last Name:</p>
                            <p>{user.last}</p>
                        </div>
                        <div className='w-[200px] h-[100px] flex flex-col justify-center'>
                            <p className='font-semibold'>Email:</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-[100px] w-[700px] flex justify-end items-center">
                <div className=' h-[100px] w-[200px] flex justify-center items-center'>
                    <button className="flex items-center justify-center gap-x-[10px] border-2 border-[#A5E8A4] text-[#A5E8A4] px-[35px] py-[14px] rounded-[14px] font-semibold text-[16px] hover:bg-[#A5E8A4] hover:text-white transition-all duration-300 cursor-pointer">
                        <Pencil size={18} />
                        <span>EDIT PROFILE</span>
                    </button>

                </div>
                <div className=' h-[100px] w-[200px] flex justify-center items-center'>
                    <Link to="/dashboard">
                        <button className="px-[50px] py-[14px] bg-[#A5E8A4] text-white border-2 border-[#A5E8A4] rounded-[12px] font-semibold transition-all duration-300 hover:bg-transparent hover:text-[#A5E8A4] cursor-pointer">
                            Dashboard
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>

    </div>
}
export default Profile