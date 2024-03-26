import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image1 from '../../res/IMG_3010.PNG'
import image2 from '../../res/IMG_3015.PNG'
import image3 from '../../res/IMG_3013.PNG'
// import image4 from '../../res/IMG_3014.PNG'
import './PopularCourses.css'

export default function PopularCourses() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div className="Carousel-container">
            <h1 className="Carousel_title">Popular courses</h1>
            <Carousel responsive={responsive}>
                <div className="card1">
                    <img className="product--image1" src={image1}/>
                    <div className="text1">
                        <p>Magzhan Onerbay</p>
                        <h1>React Advanced</h1>
                        <i>Beginner level</i>
                        <i>Mentor:yes</i>
                        <i>Certificate: yes</i>
                        <h1 className="sale-prise1">705 000 ₸</h1>
                        <h2 className="price1">905 000 ₸</h2>
                    </div>
                </div>
                <div className="card2">
                    <img className="product--image2" src={image2}/>
                    <div className="text2">
                        <p>Flow Education</p>
                        <h1>SMM-start for Beginner students</h1>
                        <i>Beginner level</i>
                        <i>Mentor:yes</i>
                        <i>Certificate: yes</i>
                        <h1 className="sale-prise2">Free</h1>
                    </div>
                </div>
                    <div className="card3">
                        <img className="product--image3" src={image3}/>
                        <div className="text3">
                            <p>Flow Education</p>
                            <h1>SMM-start for Beginner students</h1>
                            <i>Beginner level</i>
                            <i>Mentor:yes</i>
                            <i>Certificate: yes</i>
                            <h1 className="sale-prise3">Free</h1>
                        </div>
                    </div>
                <div className="card4">
                    <img className="product--image4" src={image3}/>
                    <div className="text4">
                        <p>Flow Education</p>
                        <h1>SMM-start for Beginner students</h1>
                        <i>Beginner level</i>
                        <i>Mentor:yes</i>
                        <i>Certificate: yes</i>
                        <h1 className="sale-prise4">Free</h1>
                    </div>
                </div>

            </Carousel>
        </div>


    );
}
