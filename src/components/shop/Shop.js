import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../CArd/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    // for api data load
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    // for local storage data load
    useEffect(() => {
        const stroedCart = getStoredCart();
        const saveCard = [];
        for (const id in stroedCart) {
            const addedToProduct = products.find(product => product.id === id);
            if (addedToProduct) {
                const quantity = stroedCart[id];
                addedToProduct.quantity = quantity;
                saveCard.push(addedToProduct);
            }
        }
        setCart(saveCard);
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
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