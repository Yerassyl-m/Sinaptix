import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./Components/Authorization/SignIn/SignIn.jsx";
import './index.css'
import Login from "./Components/Authorization/Login/Login.jsx";
import Sidebar from "./Components/Teacher/Sidebar/Sidebar.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/SignIn" element={<SignIn/>}/>
                <Route path="/LogIn" element={<Login/>}/>
                <Route path="/Sidebar" element={<Sidebar/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
)
