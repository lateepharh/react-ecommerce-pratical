import React from 'react'
import Menus from "@mui/icons-material/Menu";
import {IconButton} from "@mui/material";
// import Class from "./Nav.module.css";
import "../Layout/Layout.css"
// import { Link } from 'react-router-dom';



function Menu() {
  return (
    <main>
        <div className="dropdown">
            <IconButton className="men">
                <Menus></Menus>
            </IconButton>
            <div className="dropdown_content">
                {/* <Link to="/super">Supermarket</Link>
                <Link to="/health">Health & Beauty</Link>
                <Link to="/phones">Phones & Tablets</Link>
                <Link to="/home">Home & Office</Link>
                <Link to="/super">Other categories</Link> */}
                <p>Supermarket</p>
                <p>Health & Beauty</p>
                <p>Phones & Tablet</p>
                <p>Home & Office</p>
                <p>other Categories</p>
            </div>
        </div>
    </main>
  )
}

export default Menu