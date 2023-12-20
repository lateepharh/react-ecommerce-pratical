import React from 'react';
import { ShoppingCartCheckout,Search,PersonOutline,ShoppingCartOutlined,Menu} from "@mui/icons-material";
import { AppBar,Toolbar,Typography,TextField,InputAdornment,IconButton} from "@mui/material";
import "./Layout.css"


function MediaQuery() {
  return (
    <main>
        <AppBar position='static' className='appbar'>
            <Toolbar className='toolbar'>
                <div className="flex">
                    <div className="dropdown">
                       <IconButton className="men">
                       <Menu></Menu>
                      </IconButton>
                      <div className="dropdown_content">
                       <p>Supermarket</p>
                       <p>Health & Beauty</p>
                       <p>Phones & Tablet</p>
                       <p>Home & Office</p>
                       <p>other Categories</p>
                      </div>
                   </div>
                   <div style={{display:"flex",gap:"5px", color:"black", alignItems:"center"}}>
                      <Typography variant='h6' >Cartify</Typography>
                      <ShoppingCartCheckout/>
                    </div>
                </div>
               <div className="flex">
                  <div className="hover">
                      <IconButton>
                        <PersonOutline/>
                      </IconButton>
                </div>
                  <div className="hover">
                      <IconButton>
                        <ShoppingCartOutlined/>
                        <sup>0</sup>
                      </IconButton>
                </div>
               </div>
            </Toolbar>
            <TextField type='search' label="Search Products, brands and categories" variant='outlined' size='small' sx={{width:"400px"}} color='secondary'  InputProps={{
                startAdornment: <InputAdornment position='start'><Search/></InputAdornment>
                }}
            />
        </AppBar>
    </main>
  )
}

export default MediaQuery