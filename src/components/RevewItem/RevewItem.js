import React from 'react';
import './RevewItem.css'

const RevewItem = (props) => {
    const { handelRemoveProduct, product } = props;
    const { price, name, shipping, img, quantity } = product;
    return (
        <div className='review-item'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-item-info">
                <div className="info">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>price : {price}</p>
                    <p><small>shipping : {shipping}</small></p>
                    <p><small> quantity : {quantity}</small></p>

                </div>
                <div className="delete-option">
                    <button onClick={() => handelRemoveProduct(product)} className='btn'>delete</button>
                </div>
            </div>
        </div>
    );
};

export default RevewItem;