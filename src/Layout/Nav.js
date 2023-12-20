import React from 'react';
import { ShoppingCartCheckout,Search,PersonOutline,ShoppingCartOutlined,KeyboardArrowDownOutlined, HelpOutlineOutlined} from "@mui/icons-material";
import { AppBar,Toolbar,Typography, Stack,Button,TextField,InputAdornment,IconButton} from "@mui/material";
import { useMediaQuery } from 'react-responsive';
import Menu from '../component/Menu';
import MediaQuery from './MediaQuery';
import "./Layout.css";
 import { Link } from "react-router-dom";

function Nav() {
    const PhonesOrTablet = useMediaQuery({query:"(max-width:800px)"})
  return (
    <main className="main">
        {PhonesOrTablet ? <MediaQuery/> :
        <AppBar position='static'className="bar">
            <Toolbar>
                <Stack spacing={6} direction="row" sx={{alignItems:"center"}}>
                    <Menu/>
                    <div style={{display:"flex",gap:"5px", color:"black", alignItems:"center"}}>
                      <Typography variant='h6' >Cartify</Typography>
                      <ShoppingCartCheckout/>
                    </div>
                    <div>
                        <TextField type='search' label="Search Products, brands and categories" variant='outlined' size='small' sx={{width:"400px"}} color='secondary'  InputProps={{
                          startAdornment: <InputAdornment position='start'><Search/></InputAdornment>
                        }}
                       />
                       <Button className='btn'>Search</Button>
                    </div>
                    <div className="flex">
                        <div className="hover">
                        <IconButton className='icon'>
                            <PersonOutline/>
                        </IconButton>
                        <Typography variant='h6'>Account</Typography>
                        <IconButton className='icon'>
                            <KeyboardArrowDownOutlined/>
                        </IconButton>
                    </div>
                    <div className="hover">
                        <IconButton className='icon'>
                            <HelpOutlineOutlined/>
                        </IconButton>
                        <Typography variant='p'>Help</Typography>
                        <IconButton className='icon'>
                            <KeyboardArrowDownOutlined/>
                        </IconButton>
                    </div>
                    <div className="hover">
                        <IconButton className='icon'>
                            <ShoppingCartOutlined/>
                        </IconButton>
                         <Link to ="/cart">Cart</Link>                     
                    </div>
                    </div>
                    {/* <Button href='/home' color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Project</Button> */}
                </Stack>
            </Toolbar>
        </AppBar>
    }
    </main>
  )
}

export default Nav