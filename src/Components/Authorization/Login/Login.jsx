import React, {useState} from 'react';
import image3012 from "../../res/IMG_3012.PNG";
import './Login.css'

function Login() {
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
        <div className="form-container">

            <div className="left-container">
                <div className="sign-form-img">

                    <div className="image-border">
                        <img src={image3012}/>
                    </div>

                    <h1>Sinaptix</h1>
                </div>
            </div>

            <div className="right-container">

                <form onSubmit={handleSubmit}>
                    <h2>Sign in to your account</h2>

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
                        Password
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Sign In →</button>
                </form>
            </div>
        </div>
    )
        ;
}

export default Login;