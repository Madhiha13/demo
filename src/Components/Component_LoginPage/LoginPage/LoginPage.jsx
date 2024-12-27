import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../css/LoginPage.css"

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.status === 200) {
                navigate('/success');
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Something went wrong!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button onClick={handleLogin}>Login</button>
                <button className="forgot-password" onClick={() => alert('Reset password functionality coming soon!')}>
                    Forgot Password
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
