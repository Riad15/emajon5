import React from 'react';
import './Menubar.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log in</Link>
            </div>
        </nav>

    );
};

export default Menubar;