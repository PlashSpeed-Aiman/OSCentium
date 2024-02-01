import LoginService from '../../application/login/LoginService.ts'
import { useNavigate } from "@tanstack/react-router";
import {useState} from "react";

export default function LoginPage(){
    const navigate = useNavigate()
    const [showError, setShowError] = useState(false)
    function handleSubmit(event){
        event.preventDefault()
        const {username, password} = event.target
        const res = LoginService.login(username.value, password.value)
        if (res){
            navigate('/home')
        }
        else{
            setShowError(true)
        }


    }

    return(
        <>
            <section className='min-h-screen mx-auto my-auto'>
                <form className='flex flex-col max-w-lg rounded-md my-20 mx-auto my-auto justify-center items-center     bg-blue-300' onSubmit={handleSubmit}>
                    {showError && <h1 className='text-red-600'>Invalid Credentials</h1> }
                    <label>Username</label>
                    <input type="text" name="username" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <input   className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                             type="submit" value="Login" />
                </form>
            </section>

        </>

    )
}