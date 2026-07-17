import { Link } from 'react-router-dom'
import logo from '../pages/img/joblogo.png'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate =  useNavigate()
    return <div>
        <div className="flex  h-[70px] justify-between item-center">
            <div className="flex  justify-center items-center w-[300px] h-[70px]">
                <img className='w-[250px]' src={logo}></img>

            </div>
            <div className="flex  justify-between items-center w-[400px] h-[70px] font-[arial] text-gray-600 ">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>

            </div>
            <div className="flex justify-center items-center w-[300px] h-[70px]">
                <button onClick={function(){
                    navigate('/register')
                }} className="pt-[10px] pb-[10px] pr-[30px] pl-[30px] bg-green-400 rounded-[10px] text-[white] cursor-pointer">Register</button>
            </div>


        </div>
    </div>
}
export default Navbar