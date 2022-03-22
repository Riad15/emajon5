import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>
                <p><small>{seller}</small></p>
                <p><small>Ratting: {ratings} stars</small></p>
            </div>
            <p className='product-btn'>add to card</p>
        </div>
    );
};

export default Product;