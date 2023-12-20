import React from 'react';
import Nav from '../Layout/Nav';
import Layout from '../Layout/Layout';
import Produc from '../component/Produc';

function HomePage() {
 
  return (
    <>
      <Nav ></Nav>
      <Layout>
        <Produc/>
      </Layout>
   </>
  )
}

export default HomePage