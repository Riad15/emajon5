import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Card from '../CArd/Card';
import RevewItem from '../RevewItem/RevewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    }
    return (
        <div className='Shop-container'>
            <div >

                {
                    cart.map(product => <RevewItem
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}

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