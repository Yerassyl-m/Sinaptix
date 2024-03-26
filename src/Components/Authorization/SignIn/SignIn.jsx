// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
// import {Link, Route} from 'react-router-dom'
import './SignIn.css'

function SignIn() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        role: 'teacher',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <body>

        {/*<button type="SignIn-button">*/}
        {/*    <Link to="/SignIn">JOIN US</Link>*/}
        {/*</button>*/}

        <div className="sign-form-img">
        </div>

        <form onSubmit={handleSubmit}>
            <h2>Create your account</h2>
            <label>
                Full Name
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Username
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                E-mail
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Choose your role:
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>

                </select>
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <label>
                Confirm Password
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Create Account →</button>
        </form>
        </body>
    );
}
export default SignIn