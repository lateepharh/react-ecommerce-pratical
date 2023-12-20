import React from 'react';
import "./Layout.css";

function Layout(props) {
  return (
    <main className='main_layout'>
    {props.children}
    </main>
  )
}

export default Layout