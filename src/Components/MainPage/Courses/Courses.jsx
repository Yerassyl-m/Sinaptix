import React from 'react';
import './Courses.css'
import image from '../../res/happy-young-woman-holding-laptop-gray-wall-transformed 2.png'

function Courses() {
    return (
        <div className="Courses-Container">

            <div className="Courses-OneSide">

                <div className="Course-Title">
                    Study online<br/>
                    with us
                </div>

                <div className="Courses-Text">
                    <p>Synaptix is an educational website that
                        integrates online<br/>
                        courses, video conferences, and gamification.</p>
                </div>

                <div className="Courses-Button">
                    <h6>go to the courses</h6>
                </div>
            </div>

            <div className="Courses-Image">
                <img src={image}/>
            </div>

        </div>
    );
}

export default Courses;