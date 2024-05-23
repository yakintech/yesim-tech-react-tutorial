import { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)


export const CartProvider = ({ children }) => {

    //Global bir state oluşturuyorum
    const [cart, setCart] = useState([])

    useEffect(() => {
      
        let cartDataFromStorage = localStorage.getItem("cart")

        if(cartDataFromStorage){
            setCart(JSON.parse(cartDataFromStorage))  // json to js object
        }
      
    }, [])
    

    //sepete ürün ekleme fonksiyonu. Bu fonksiyon ile sepet state güncelleyeceğim
    const addToCart = (item) => {

        //ürün sepette var mı?
        let cartItem = cart.find(q => q.id == item.id) //firstOrDefault

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1;
            setCart([...cart]) //mevcut sepetin içerisindne bir property değiştirdiğimiz için spread(...) ile yeni referans verip gönderdik
            localStorage.setItem("cart", JSON.stringify([...cart])) // jsobject to JSON data
        }
        else {
            let newCartItem = {
                id: item.id,
                quantity: 1,
                unitPrice: item.unitPrice,
                name: item.name
            }
            setCart([...cart, newCartItem])
            localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]))
        }
    }

    const emptyCart = () => {
        setCart([])
        localStorage.setItem("cart", [])
    }

    const removeFromCart = (id) => {
        let filteredCart = cart.filter(q => q.id != id)
        setCart(filteredCart)
        localStorage.setItem("cart", JSON.stringify(filteredCart))
    }

    return <CartContext.Provider value={{cart, addToCart, emptyCart, removeFromCart}}>{children}</CartContext.Provider>
}

// let cartItem = {
//     id:1,
//     name:"IPhone",
//     quantity:5,
//     unitPrice:5500
// }