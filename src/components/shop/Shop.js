import React, { useEffect, useState } from 'react';
import Card from '../CArd/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        let newCart = [];
        newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='Shop-container'>
            <div className='products-container' >
                {
                    products.map(products => <Product
                        key={products.id}
                        product={products}
                        addToCart={addToCart}>
                    </Product>)
                }
            </div>
            <div className='order-details'>
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;