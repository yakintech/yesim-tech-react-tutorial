import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {

    const { cart, emptyCart, removeFromCart } = useContext(CartContext)

    let totalPrice = 0

    cart.forEach(element => {
        totalPrice = totalPrice + (element.unitPrice * element.quantity)
    });

    return (<>
        <h1>Total: {totalPrice.toFixed(2)}</h1>
        <button onClick={emptyCart}>Empty</button>
        <ul>
            {//iphone * 2 = 10.000
                cart.map(item => <li>
                    {item.name} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>)
            }
        </ul>
    </>)
}

export default Cart