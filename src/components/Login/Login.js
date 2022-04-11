import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div className='login-div'>
                <h4 className='form-title'>Log In</h4>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
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