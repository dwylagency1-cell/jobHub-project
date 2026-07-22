import { Link } from 'react-router-dom'
import img from './img/joblogo.png'
import { Search, MapPin } from "lucide-react";
function Nabvar(props) {
    return <div>
        <div className='bg-green-300 h-[300px] w-full'>
            <div className="flex  justify-between items-center">
                <div className=" h-[60px] w-[300px] flex justify-center items-center">
                    <img className='w-[200px] mt-[4px]' src={img}></img>
                </div>
                <div className='h-[60px] w-[400px] flex justify-between items-center text-[white]'> 
                    <Link to={'/bolg'}>Blog</Link>
                    <Link to={'/save'}>Saved jobs</Link>
                    <Link to={'/about'}>About</Link>
                </div>
                <div className="bg-blue-300 h-[60px] w-[300px] flex justify-between items-center">
                    <p>{props.first}</p>

                </div>
            </div>
            <div className=' w-[1300px] h-[50px] ml-[40px] mt-[40px] mr-[40px] mb-[20px] flex items-center'>
                <h1 className='ml-[40px] text-[30px] text-[white] font-semibold'>Find Your Dream Job Here</h1>
            </div>
            <div className=' h-[80px] w-full flex justify-center'>
                <div className=" w-full max-w-6xl bg-white rounded-full shadow-lg flex items-center p-2">

                    {/* Search */}
                    <div className="flex items-center flex-1 px-5">
                        <Search size={20} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-gray-300"></div>

                    {/* Location */}
                    <div className="flex items-center flex-1 px-5">
                        <MapPin size={20} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Add country or city"
                            className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-[#A5E8A4] hover:bg-[#8FDE8E] transition-all px-10 py-4 rounded-full font-semibold text-gray-800">
                        Search
                    </button>

                </div>
            </div>
        </div>
        </div>
    
}
export default Nabvar