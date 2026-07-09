import img from './img/sample_pic.png'
import elem_1 from './img/elem_1.png'
import elem_2 from './img/elem_2.png'
import elem_3 from './img/elem_3.png'
import elem_4 from './img/elem_4.png'
function Middle() {
    return <div>
        <div className="  flex h-[580px] justify-between items-center ">
            <div className=" h-[580px] w-[670px] flex flex-col items-center justify-center p-[70px]">
                <div className="flex  h-[580px] w-[600px] items-center justify-center gap-x-[20px] flex-col ">
                    <div className=" h-[150px] w-[600px]">
                        <h1 className="text-[50px] font-semibold font-[arial]  text-gray-800">Find Your <span className="text-green-400">Dream</span> job with us</h1>
                    </div>
                    <div className=" h-[100px] w-[600px] flex justify-center items-center font-[arial] text-[gray]">
                        <p>Discover thousands of tech opportunities from the world's leading companies. Find your next role faster with smart search, curated listings, and a seamless job-hunting experience.</p>
                    </div>

                </div>

            </div>
            <div className="h-[580px] w-[670px] flex justify-center items-center relative">
                <img className='w-[250px] absolute' src={elem_1}></img>
                <img className='w-[250px] absolute mr-[600px] mb-[150px]' src={elem_2}></img>
                <img className='w-[470px] mr-[250px]' src={img}></img>
                <img className='w-[130px] absolute mt-[300px] ml-[100px]' src={elem_4}></img>
                <img className='w-[250px] absolute mt-[450px] mr-[600px]' src={elem_3}></img>
            </div>

        </div>
    </div>
}
export default Middle