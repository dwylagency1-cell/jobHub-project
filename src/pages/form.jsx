import { useState } from 'react'
import logo from './img/joblogo.png'
import Dashboard from './dashboard.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "./userContextProvider.jsx";
function Form(props) {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
    function handelSubmit(e) {
        e.preventDefault()
        
        console.log(email)
        console.log(first)
        console.log(last)
        console.log({
            first,
            last,
            email
        });

        setUser({
        first: first,
        last: last,
        email: email
    });
    
        setEmail('')
        setFirst('')
        setLast('')
        

        navigate('/dashboard')
    }


    const [email, setEmail] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    return <div className="h-screen w-full bg-[#F8FAFC] flex justify-center items-center">
        <div >
            <form onSubmit={handelSubmit} className="bg-white flex flex-col justify-center items-center gap-y-[20px] p-[100px] rounded-[20px]">
                <img className='w-[300px]' src={logo}></img>
                <div className="flex justify-between items-center gap-x-[10px]">
                    <input className="w-[200px] pt-[10px] pb-[10px] border-solid border rounded-[10px] pl-[5px]" type="text" name='first_name' placeholder="First name" value={first} onChange={function(e){
                        setFirst(e.target.value);
                    }}></input>
                    <input className="w-[200px] pt-[10px] pb-[10px] border-solid border rounded-[10px] pl-[5px]" type="text" name='last_name' placeholder="Last name" value={last} onChange={function(e) {
                        setLast(e.target.value);
                    }}></input>
                </div>
                <input className="w-[400px] pt-[10px] pb-[10px] border-solid border rounded-[10px] pl-[5px]" type='email' placeholder="Email" value={email} onChange={function(e) 
                    {setEmail(e.target.value);}}></input>
                <button type="submit" className="w-[400px] pt-[10px] pb-[10px] border-solid border rounded-[10px] bg-green-400 text-[white] cursor-pointer">Submit</button>
            </form>
        </div>
    </div>
}
export default Form