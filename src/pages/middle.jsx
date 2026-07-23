import Fuse from "fuse.js";
import { useState } from "react";
function Middle(props){

    const query = props.query
    const jobHub = props.job

    const fuse = new Fuse(jobHub, {
        keys: ["jobTitle", "company", "jobType"],
        threshold: 0.3,  
    })
   
    const results = query ? fuse.search(query) : []

    const displayItems = results.length > 0
    ? results.map(({ item }) => item)
    : jobHub

    
    return <div>
        <div className=' w-full h-[80px] flex items-center pl-[80px]'>
            <h1 className='text-[30px]'>Recommended Jobs</h1>
        </div>
        <div className="grid grid-cols-[300px_300px_300px_300px] gap-x-[20px] gap-y-[20px] p-[50px]">
            {displayItems.map(function(elem){
                return <div>
                    <div className="h-[300px] bg-white rounded-[20px] shadow-md p-[20px] flex flex-col justify-between">

                    {/* Top */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-[12px]">

                            <img
                                className="w-[50px] h-[50px] rounded-full"
                                src={elem.logo}
                                alt=""
                            />

                            <div>
                                <h2 className="text-[18px] font-semibold">
                                    {elem.company}
                                </h2>

                                <p className="text-[14px] text-gray-500">
                                    {elem.jobTitle}
                                </p>
                            </div>

                        </div>

                        <button onClick={function(){
                            className="bg-red-500"
                        }} className="text-gray-400 text-[22px] cursor-pointer">
                            ♡
                        </button>
                    </div>

                    {/* Middle */}

                    <div className="flex gap-x-[10px]">

                        <span className="bg-green-100 text-green-700 px-[12px] py-[5px] rounded-full text-[13px]">
                            Full Time
                        </span>

                        <span className="bg-blue-100 text-blue-700 px-[12px] py-[5px] rounded-full text-[13px]">
                            Remote
                        </span>

                    </div>

                    {/* Bottom */}

                    <div className="flex justify-between items-center">

                        <div>
                            <h2 className="text-[25px] font-bold">
                                {elem.payRate}
                            </h2>

                            <p className="text-gray-500 text-[14px]">
                                Posted 2 days ago
                            </p>
                        </div>

                        <button className="bg-[#A5E8A4] px-[22px] py-[10px] rounded-[10px] font-semibold cursor-pointer hover:bg-[#8FDE8E] transition-all">
                            Apply
                        </button>

                    </div>

                </div>
                </div>
            })}
        </div>

    </div>
}
export default Middle