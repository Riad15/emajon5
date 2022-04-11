import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // create set state 
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState();
    const [confirmPassWord, setConfirmPassWord] = useState();
    const [error, setError] = useState();

    // write a function to handle email 
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    // write a function to handle password 
    const handlePassWord = (event) => {
        setPassWord(event.target.value);
    }

    //  write a function to handle Confirm PassWord
    const handleConfirmPassWord = (event) => {
        setConfirmPassWord(event.target.value);
    }

    // Write a function for create an user account 
    const handleCreateUsere = (event) => {
        if (passWord !== confirmPassWord) {
            setEmail("your Password dose not match !");
            return;
        }
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div className='login-div'>
                <h4 className='form-title'>Sign Up</h4>
                <form onSubmit={handleCreateUsere} action="" >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassWord} type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassWord} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p className='form-p'>
                    All Ready Have an Account ? <Link className='form-link' to="/login">Log in</Link>
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

export default SignUp;