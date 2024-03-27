import React from 'react';
import {SiBookstack} from "react-icons/si";
import SearchBar from "./SearchBar.jsx";
import './Header.css'
import {CiHeart} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";
import {IoIosContact} from "react-icons/io";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";
/*// import { RxHamburgerMenu } from "react-icons/rx";*/

function Header() {
    return (
        <div className="Header-container">
            <div className='Header-Logo'>
                <SiBookstack size={30} style={{color: "#1677FF"}} />
                <h2>Sinaptix</h2>
            </div>
            <div className="Header-SearchBar">
                <SearchBar />
            </div>
            <div className="Header-Favourites">
                <CiHeart size={20} style={{color: "#1677FF"}}/>
                <h6>Favourites</h6>
            </div>
            <div className="Header-card">
                <CiShoppingCart size={20} style={{color: "#1677FF"}}/>
                <h6>Cart</h6>
            </div>
            <div className="Header-SignIn">

                <Link to="/SignIn" style={{textDecoration:'none', paddingLeft:'2px', display:'flex', color:'white'}}>
                        <IoIosContact size={20}/>
                    <h6>Sign in</h6>
                </Link>

            </div>
            <div className="Header-Login">
              <Link to="/LogIn"  style={{textDecoration:'none'}}><h6>Log in</h6></Link>
            </div>

        </div>
    );
}

export default Header;