import React, { Component } from 'react';
import DataCompile from './component/DataCompile';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
 import Cart from './component/Cart';
 import { ProductContextProvider } from './context/ProductContext';
 import Produc from './component/Produc';
export class App extends Component {
  render() {
    return (
      <>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<DataCompile/>}/>
            <Route path='/shop' element={<Produc></Produc>}></Route>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
       </Router>
      </ProductContextProvider> 
      </>
    )
  }
}

export default App