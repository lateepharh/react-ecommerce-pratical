import React from 'react';
import { DataWare } from '../Pages/DataWares';
import { ProductContext } from '../context/ProductContext';
import CarProduct from './CarProduct';
import Nav from '../Layout/Nav';
import { Button } from '@mui/material';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import Class from "../Layout/Nav.module.css";

function Cart() {
  const {cartItems,TotalAmount} = React.useContext(ProductContext);
  const total = TotalAmount();

  const navigate = useNavigate();
  return (
    <>
    <Nav></Nav>
    <div className='cart'>
      {/* <div>
        <h4>Your Cart</h4>
      </div> */}
      <div className={Class.cartflex}>
        <h2>Product</h2>
        <h2>Quantity</h2>
        <h2>Price</h2>
      </div>
      <div className="cartitems">
        {
          DataWare.map((products)=> {
            if (cartItems[products.id] !== 0) {
              return <CarProduct data={products}/>
            }
          })
        }
      </div>
      {
        total > 0 ? (
          <div className={Class.check}>
           <h4 className={Class.total}>Total:#{total}</h4>
           <Button onClick={()=> navigate("/shop")} variant='contained'sx={{marginRight:"10px"}}>Continue Shopping</Button>
           <Button variant='contained'>Checkout  <ShoppingCartCheckout/></Button>
          </div>
        ):(
          <h4>Your cart is empty</h4>
        )
      }
     
    </div>
    </>
  )
}

export default Cart