
import LoginService from "../application/login/LoginService.ts";
import {useNavigate} from "react-router-dom";


export default function NavBar(){
    const navigate = useNavigate()
    function handleLogout(){
        LoginService.logout()
        navigate('/login')
    }

    return(

        <nav className='bg-blue-400 px-3 py-4 flex flex-row gap-3 items-end'>
            <h1 className='text-2xl'>AgraLigma</h1>
            <h1 className='text-xl'>Home</h1>
            <h1 className='text-xl'>Analytics</h1>
            <button onClick={handleLogout} className='bg-white  rounded-md px-3 py-1 hover:bg-gray-100'>Logout</button>
        </nav>
    )
}