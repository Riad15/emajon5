import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';

const Login = () => {
    // write a use State fir email and password
    const [email, setEmail] = useState('')
    const [passWord, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';
    const [signInWithEmailAndPassword,
        user, loading, error] = useSignInWithEmailAndPassword(auth);

    // write a function for email handler
    const handleEmail = (event) => {
        setEmail(event.target.value);

    }

    // write a function for password handler
    const handlePassWord = (event) => {
        setPassword(event.target.value);

    }

    // loading timing condition
    if (loading) {
        return <p style={{ textAlign: 'center ', fontSize: '21px', fontWeight: '400' }}>Loading...</p>;
    }

    if (user) {
        navigate(from, { replace: true })
    }


    const handleUserLogin = (event) => {
        signInWithEmailAndPassword(email, passWord);
        event.preventDefault();
    }

    return (
        <div className='form-container'>
            <div className='login-div'>
                <h4 className='form-title'>Log In</h4>
                <form onSubmit={handleUserLogin} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassWord} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center ', fontSize: '21px', fontWeight: '400' }}>{error?.message}</p>
                    <input className='submit-btn' type="submit" value="Log in" />
                </form>
                <p className='form-p'>
                    New to Emajon ? <Link className='form-link' to="/signup">Create an Account</Link>
                </p>
                <div >
                    <div>
                        <hr />
                    </div>
                    <p className='or'>or</p>
                </div>
                <div className='google-login'>
                    <img className='g-logo' src={require('./picture/google-logo.png')} alt="" />
                    <p>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;