import React, { useState } from 'react';
import { useAuth } from '../utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login(params) {
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    const auth = useAuth();

    function handleLogin(params) {
        const userInfo = { name: userName, password: passWord };
        setUser(userInfo);
        auth.login(userInfo);
        navigate(redirectPath,{replace: true});
    }

    function handleSignup(params) {
        const userInfo = { name: userName, password: passWord };
        setUser(userInfo);
        auth.login(userInfo);
        navigate(redirectPath,{replace: true});
    }

    return (
        <div className='login-signup'>
            <h1>Login/SignUp</h1>
            <br />
            <br />
            <input type="text" placeholder='Enter your Name....' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <br />
            <input type="password" placeholder='Enter your Password....' value={passWord} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <p>{}</p>
            <button className='login' onClick={handleLogin}>Login</button>
            <button className='signup' onClick={handleSignup}>Signup</button>
        </div>
    );
}

export default Login;
