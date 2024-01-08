import React from 'react';
import { ProductContext } from '../context/ProductContext';
import Class from "../Layout/Nav.module.css";
import { Cancel } from '@mui/icons-material';



export default function CarProduct(props) {
    const {id,title,image,price} = props.data;
  const {cartItems, AddtoCart,RemoveFromCart,updateCartItem} = React.useContext(ProductContext);

  return (
    <div className={Class.cartProduct}>
       <div className={Class.div}>
        <Cancel onClick={()=> RemoveFromCart(id)}/>
        <img src={image} alt="" />
        <h5><b>{title}</b></h5>
       </div>
       <div className="count-handler">
        <button onClick={()=>AddtoCart(id)}>+</button>
         <input type="text" value={cartItems[id]} onChange={(e) => { updateCartItem(Number(e.target.value),id)}} />
        <button onClick={()=>RemoveFromCart(id)}>-</button>
       </div>
       <div className={Class.price}>
          <p>#{price}</p>
       </div>
       
    </div>
  )
}