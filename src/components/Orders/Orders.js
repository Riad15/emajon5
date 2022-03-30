import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>thi is Orders Section</h1>
            <p>total number of Products: {products.length}</p>
            <p>total Cart {cart.length}</p>
        </div>
    );
};

export default Orders;