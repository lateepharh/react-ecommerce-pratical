import React from 'react';
import { DataWare } from '../Pages/DataWares';
import { ProductContext } from '../context/ProductContext';
import CarProduct from './CarProduct';
import Nav from '../Layout/Nav';
import { Button } from '@mui/material';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
function Cart() {
  const {cartItems} = React.useContext(ProductContext)

  return (
    <>
    <Nav></Nav>
    <div className='cart'>
      <div>
        <h4>Yout Cart</h4>
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
      <div className="check">
        <p>Subtotal:#</p>
        <Button variant='contained'>Checkout  <ShoppingCartCheckout/></Button>
      </div>
    </div>
    </>
  )
}

export default Cart