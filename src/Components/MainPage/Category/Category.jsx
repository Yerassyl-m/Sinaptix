import React from 'react';
import './Category.css'
import {PiPencilCircle} from "react-icons/pi";
import {TbTargetArrow} from "react-icons/tb";
import {PiChalkboardSimple} from "react-icons/pi";
import {ImStatsDots} from "react-icons/im";
import {FcOvertime} from "react-icons/fc";
import {SiTesla} from "react-icons/si";
import {TbDeviceMobileDollar} from "react-icons/tb";
import {FaLanguage} from "react-icons/fa6";
import { MdControlPoint } from "react-icons/md";


function Category() {
    return (
        <div className="Category-Container">
            <div className="Category-design">
                <PiPencilCircle/>
                <h6>Design</h6>
            </div>
            <div className="Category-Marketing">
                <TbTargetArrow/>
                <h6>Marketing</h6>
            </div>
            <div className="Category-IT">
                <PiChalkboardSimple/>
                <h6>IT</h6>
            </div>
            <div className="Category-Finance">
                <ImStatsDots/>
                <h6>Finance</h6>
            </div>
            <div className="Category-Management">
                <FcOvertime/>
                <h6>Management</h6>
            </div>
            <div className="Category-Science">
                <SiTesla/>
                <h6>Science</h6>
            </div>
            <div className="Category-Mobilography">
                <TbDeviceMobileDollar/>
                <h6>Mobilography</h6>
            </div>
            <div className="Category-Language">
                <FaLanguage/>
                <h6>Language</h6>
            </div>
            <div className="Category-Other">
                <MdControlPoint/>
                <h6>Other</h6>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default Category;