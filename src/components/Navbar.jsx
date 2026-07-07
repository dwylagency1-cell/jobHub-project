function Navbar() {
    return <div>
        <div className="flex  h-[70px] justify-between item-center">
            <div className="flex  justify-center items-center w-[300px] h-[70px]">
                <h1 className="text-[30px]">JobHub</h1>

            </div>
            <div className="flex  justify-between items-center w-[400px] h-[70px] font-[arial] text-gray-600 ">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>

            </div>
            <div className="flex justify-center items-center w-[300px] h-[70px]">
                <button className="pt-[10px] pb-[10px] pr-[30px] pl-[30px] bg-green-400 rounded-[10px] text-[white]">Register</button>
            </div>


        </div>
    </div>
}
export default Navbar