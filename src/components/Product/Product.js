import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, addToCart } = props;
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p><small>{seller}</small></p>
                <p><small>Ratting: {ratings} stars</small></p>
            </div>
            <p onClick={() => { addToCart(product) }} className='product-btn'>add to card</p>
        </div>
    );
};

export default Product;