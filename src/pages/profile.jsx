import {CircleUserRound} from 'lucide-react'
function Profile(){
    return <div className="  w-screen h-screen flex justify-center items-center">
        <div className=" h-[450px] w-[800px] flex flex-col  ">
            <div className=" h-[50px] w-[800px]">
                <h1 className="text-[25px] flex items-center">Your Profile</h1>
            </div>
            <div className=" h-[300px] w-[800px] flex flex-row">
                <div className="h-[300px] w-[300px] flex items-center justify-center">
                    <CircleUserRound strokeWidth={1} size={300}/> 

                </div>
                <div className="bg-blue-300 h-[300px] w-[500px]"></div>
            </div>
            <div className="bg-red-300 h-[100px] w-[800px]"></div>
        </div>

    </div>
}
export default Profile