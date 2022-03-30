import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const stroedCart = getStoredCart();
        const saveCard = [];
        for (const id in stroedCart) {
            const addedToProduct = products.find(product => product.id === id);
            if (addedToProduct) {
                const quantity = stroedCart[id]
                addedToProduct.quantity = quantity;
                saveCard.push(addedToProduct);
            }

        }
        setCart(saveCard);
    }, [products])

    return [cart, setCart];
}
export default useCart;