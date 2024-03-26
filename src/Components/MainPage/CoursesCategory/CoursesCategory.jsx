import React from 'react';
import './CoursesCategory.css'
import { FcCloseUpMode } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { IoMdNutrition } from "react-icons/io";


function CoursesCategory() {
    return (
        <div className="CoursesCategory">

            <div className="CoursesCategory-title">
                <h1>Courses Category</h1>
            </div>

            <div className="CoursesCategory-text">
                <p>Onlearing is one powerful online software suite that combines all the tools<br/>
                    needed to run a successful school or office.</p>
            </div>

            <div className="CoursesCategory-Category">
                <div className="CoursesCategory-Category-Beauty">
                    <FcCloseUpMode size={80} style={{paddingTop:'2rem'}}/>
                    <h5>Beauty</h5>
                    <p> One powerful online software <br/>suite that combines</p>

                    <div className="CoursesCategory-Button-Beauty">
                        <h6>more</h6>
                    </div>
                </div>
                <div className="CoursesCategory-Category-Medical">
                    <FcInvite size={80} style={{paddingTop:'2rem'}}/>
                    <h5>Medical</h5>
                    <p> One powerful online software <br/>suite that combines</p>
                    <div className="CoursesCategory-Button-Medical">
                        <h6>more</h6>
                    </div>
                </div>
                <div className="CoursesCategory-Category-Sports">
                    <FcSportsMode size={80} style={{paddingTop:'2rem'}}/>
                    <h5>Sports</h5>
                    <p> One powerful online software <br/>suite that combines</p>
                    <div className="CoursesCategory-Button-Sports">
                        <h6>Explore courses</h6>
                    </div>
                </div>
                <div className="CoursesCategory-Category-Nutrition">
                    <IoMdNutrition size={80} style={{paddingTop:'2rem', color:'orange'}}/>
                    <h5>Nutrition</h5>
                    <p> One powerful online software <br/>suite that combines</p>

                    <div className="CoursesCategory-Button-Nutrition">
                        <h6>more</h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CoursesCategory;