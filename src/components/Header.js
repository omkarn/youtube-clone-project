import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import youtubeLogo from '../assets/images/YoutubeLogo.png'
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/appSlice';
import { Link } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    return (
        <div className='grid grid-flow-col items-center justify-between px-6 py-2'>
            <div className='flex items-center gap-10 col-span-1'>
                <GiHamburgerMenu className='text-xl cursor-pointer' onClick={() => dispatch(toggleSidebar())} />
                <Link to='/'>
                    <img src={youtubeLogo} alt='Youtube Logo' className='h-6' />
                </Link>
            </div>
            <div className='flex p-0 m-0 items-center justify-between border-gray-200 border-2 rounded-full col-span-2'>
                <input type='text' placeholder='Search' className='mx-3 my-1 h-7 outline-none' />
                <button className='text-2xl rounded-l-none bg-gray-100 rounded-full h-9 w-16 flex items-center justify-center hover:bg-gray-200'><CiSearch /></button>
            </div>
            <div className='col-span-1'>
                <FaUserCircle className='text-3xl' />
            </div>
        </div>
    )
}

export default Header