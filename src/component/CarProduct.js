import React from 'react';
import { ProductContext } from '../context/ProductContext';


export default function CarProduct(props) {
    const {id,title,image,price} = props.data;
  const {cartItems, AddtoCart,RemoveFromCart} = React.useContext(ProductContext);

  return (
    <div className='cart-product'>
        <img src={image} alt="" />
       <div>
          <h5><b>{title}</b></h5>
           <p>#{price}</p>
       </div>
       <div className="count-handler">
        <button onClick={()=>AddtoCart(id)}>+</button>
         <input type="text" value={cartItems[id]} />
         <button onClick={()=>RemoveFromCart(id)}>-</button>
       </div>
    </div>
  )
}