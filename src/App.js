import React, { Component } from 'react';
import DataCompile from './component/DataCompile';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
 import Cart from './component/Cart';
export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<DataCompile/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
       </Router>
        
      </>
    )
  }
}

export default App