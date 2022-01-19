import {createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({children}){
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

    function isInCart (id) {
        return cart.some(item => item.id === id)
    }

    function addToCart({id, categoria, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad + item.cantidad
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, categoria, tipo, precio, cantidad}])
    }

    function updateToCart({id, categoria, tipo, precio, cantidad}) {
        const isCurrentInCart = isInCart(id)
        if (isCurrentInCart) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        cantidad: cantidad
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, categoria, tipo, precio, cantidad}])
    }

    function clearCart(){
        setCart([]);
    }

    useEffect(() => {
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const Item of cart) {
				totalPrice = totalPrice + Item.precio * Item.cantidad;
				totalItems += Item.cantidad;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
		};
		Total();
	}, [cart]);

    function handleRemove(id) {
        const newcart = cart.filter((item) => item.id !== id);
        setCart(newcart);
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                updateToCart,
                handleRemove,
                totalPrice, 
                totalItems,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}