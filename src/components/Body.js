import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

function Body() {

    return (
        <div className='flex px-3 py-1'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body;