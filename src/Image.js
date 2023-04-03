import React, {useState, useContext} from "react"
import {Context} from "./Context"

function Image ({img, className}) {
    const [hovered, setHovered] = useState(false)
    
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)

    const inCart = cartItems.some(item => item.id == img.id)
    
    const heartIcon = img.isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    : hovered ? <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    : ""
    const cartIcon = inCart ? <i className="ri-shopping-cart-fill cart" onClick={() => {
        removeFromCart(img.id)
    }}></i>
    : hovered ? <i className="ri-add-circle-line cart" onClick={() => {
        addToCart(img)
    }}></i>
    : ""

    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
export default Image

    