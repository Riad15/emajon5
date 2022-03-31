import React from 'react';
import './Card.css'

const Card = (props) => {
    const { cart } = props;
    console.log(props);
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = tax + shipping + total;


    return (
        <div className='card'>
            <h3>Order summary</h3>
            <p>product item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <hr />
            <h3>Grand Total: ${grandTotal} </h3>
            {props.children}
        </div>
    );
};

export default Card;