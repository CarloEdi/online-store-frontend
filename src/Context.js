import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        setAllPhotos(prev => prev.map(photo => {
            if(photo.id == id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            else{
                return photo
            }
        }))
    }

    function addToCart(img) {
        setCartItems(prev => [...prev, img])
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    console.log(cartItems)
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, emptyCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}