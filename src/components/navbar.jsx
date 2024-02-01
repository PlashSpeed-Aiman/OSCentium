import LoginService from "../application/login/LoginService.ts";
import {Button, Navbar, Typography} from "@material-tailwind/react";
import {Link, useNavigate} from "@tanstack/react-router";

export default function NavBar() {
    const navigate = useNavigate()

    function handleLogout() {
        LoginService.logout()
        navigate('/login')
    }

    return (

        <Navbar
            className='bg-light-blue-200 text-blue-gray-800 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 gap-2 flex items-baseline '>
            <Typography color='blue-gray' className='text-2xl'>OSCentium</Typography>
            <Typography variant='h6' color="blue-gray">
                <Link to={'/'} className=''>Home</Link>
            </Typography>
            <Typography variant='h6' color="blue-gray">
                <Link to={'/inventory'} className=''>Inventory</Link>
            </Typography>
            <Typography variant='h6' color="blue-gray">
                <Link to={'/item-management'} className=''>Item Management</Link>
            </Typography>
            <Typography variant='h6' color="blue-gray">
                <Link to={'/sales'} className=''>Sales</Link>
            </Typography>
            <Typography onClick={handleLogout} className='   '>Logout</Typography>
        </Navbar>
    )
}