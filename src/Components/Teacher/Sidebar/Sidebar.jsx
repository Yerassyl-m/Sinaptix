import React from 'react';
import './Sidebar.css';
import {SiBookstack} from "react-icons/si";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiCabinet } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";


const Sidebar = () => {
    return (
        <nav id="sidebar" aria-label="Main Navigation">
            <div className='Header-Logo'>
                <SiBookstack size={50} style={{color:"#5541D7", }}/>
                <h2> Sinaptix</h2>
            </div>

            <ul>
                <li><a href="/dashboard" tabIndex="0"><IoSpeedometerOutline/> Dashboard</a></li>
                <li><a href="/courses" tabIndex="0"><BiCabinet/> My Courses</a></li>
                <li><a href="/statistics" tabIndex="0"><BsGraphUp/> Statistics</a></li>
                <li><a href="/calendar" tabIndex="0"><CiCalendar/> Calendar</a></li>
                <li><a href="/webinar" tabIndex="0"><AiOutlineVideoCamera/> Webinar</a></li>
                <li><a href="/settings" tabIndex="0"><CiSettings/> Settings</a></li>
            </ul>

        </nav>
    )
}

export default Sidebar;