import React, {useState, useContext} from "react"
import {Context} from "./Context"
import CartItem from "./CartItem"

function Cart () {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const [orderPlaced, setOrderPlaced] = useState(false)
    const cart = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })
    const totalCost = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText("Place Order")
            emptyCart()
            setOrderPlaced(true)
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cart}
            <p className="total-cost">Total: {totalCost}</p>
            {orderPlaced && <h1>Success! Your order has been placed.</h1>}
            <div className="order-button">
            {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText}</button>}
            </div>
        </main>
    )
}
export default Cart