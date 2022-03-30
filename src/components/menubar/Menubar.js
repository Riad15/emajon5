import React from 'react';
import './Menubar.css';
import logo from '../../images/Logo.svg';

const Menubar = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/home">Home</a>
            </div>
        </nav>

    );
};

export default Menubar;