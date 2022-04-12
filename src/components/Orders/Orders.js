import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../CArd/Card';
import RevewItem from '../RevewItem/RevewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    const handleInventoryBtn = () => {
        const path = '/inventory';
        navigate(path)
    }
    return (
        <div className='Shop-container'>
            <div className='review-items' >

                {
                    cart.map(product => <RevewItem
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}

                    ></RevewItem>)
                }

            </div>
            <div className="cart-details">
                <Card cart={cart}>
                    {/* <h2>hello order</h2> */}
                </Card>
                <button onClick={handleInventoryBtn} className='inventory-btn'>Pay</button>
            </div>

        </div>
    );
};

export default Orders;