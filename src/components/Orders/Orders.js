import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Card from '../CArd/Card';
import RevewItem from '../RevewItem/RevewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='Shop-container'>
            <div >

                {
                    cart.map(product => <RevewItem
                        key={product.id}
                        product={product}

                    ></RevewItem>)
                }

            </div>
            <div className="cart-details">
                <Card cart={cart}></Card>
            </div>

        </div>
    );
};

export default Orders;