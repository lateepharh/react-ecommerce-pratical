import React from 'react';
import { DataWare } from '../Pages/DataWares';


export const ProductContext = React.createContext(null)

// this  fucction below has an array(Dataware) that represent the initial state of our cartItems; nb-we are creating an object state below with the products id
const GetInitialCart = ()=>{
    let cart = {};
    for (let index = 0; index < DataWare.length + 1; index++) {
        cart[index] = 0
        
    }
    return cart;
}
export const ProductContextProvider = (props)=>{
    //this component define all the state and functions that will be used
    const [cartItems, setCartItems] = React.useState(GetInitialCart());
    const TotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0) {
                let productinfo = DataWare.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * productinfo.price;
                console.log(cartItems[item]);
                console.log(productinfo.price);
            }
        }
        return totalAmount
    }

    const AddtoCart =(itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid] + 1}))
    };
    const RemoveFromCart =(itemid)=>{
        setCartItems((prev)=>({...prev, [itemid]: prev[itemid] - 1}))
    };
    const updateCartItem =(newamount, itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]:newamount}))
    }

    const context ={
        cartItems,
        AddtoCart,
        RemoveFromCart,
        updateCartItem,
        TotalAmount,
    };
    console.log(cartItems);
    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    )
}
//the . provider, we keep track and organize data and all the logic used 