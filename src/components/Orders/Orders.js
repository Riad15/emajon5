import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>thi is Orders Section</h1>
            <p>total number of Products: {products.length}</p>
        </div>
    );
};

export default Orders;