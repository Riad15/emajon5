import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    // create set state 
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // useCreateUserWithEmailAndPassword from react firebase hooks
    const [createUserWithEmailAndPassword, user, loading,] = useCreateUserWithEmailAndPassword(auth);
    // useSignInWithGoogle from react firebase hooks
    const [signInWithGoogle,] = useSignInWithGoogle(auth);

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
    if (loading) {
        return <p style={{ textAlign: 'center ', fontSize: '21px', fontWeight: '400' }}>Loading...</p>;
    }
    if (user) {
        navigate('/shop');

    }

    // Write a function for create an user account 
    const handleCreateUsere = (event) => {
        if (passWord !== confirmPassWord) {
            setError("your Password dose not match !");
            return;
        }
        // function call firebase login email-password hooks
        createUserWithEmailAndPassword(email, passWord);
        event.preventDefault();
    }
    const handleGoogleSignUp = (event) => {
        // function call firebase google sign in hooks
        signInWithGoogle();
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
                <div onClick={handleGoogleSignUp} className='google-login'>
                    <img className='g-logo' src={require('./picture/google-logo.png')} alt="" />
                    <p>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;