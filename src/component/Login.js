import React, { Component } from 'react';
import {Button, TextField, Typography, IconButton} from "@mui/material"
import { Facebook } from '@mui/icons-material';
import ShoppingCartChecked from "@mui/icons-material/ShoppingCartCheckout";
import Data from './Data';

export class Login extends Component {
  continue = (e)=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const {email, handleChange} = this.props;
    return (
      <section>
        <IconButton size='large' color='secondary'>
          <ShoppingCartChecked color='inherit' size="large"/>
        </IconButton>
        <Typography variant='h4' component="div" style={{margin:"15px 0"}}>Welcome to Cartify</Typography>
        <p style={{color:"grey"}}>Type your e-mail or phone number to login or create a Cartify account.</p>

        <TextField size='medium' type='text' required label="Email or Mobile Number"  color="secondary" helperText={email ? "Either the email or phone number is not valid":"Enter a valid email or phone number"} defaultValue={email} onChange={handleChange("email")} sx={{width:"400px"}} />

        <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={this.continue} variant='contained' color='secondary'>Continue</Button>
        <Button startIcon={<Facebook></Facebook>} variant='contained' color='primary' sx={{marginTop:"10px", width:"400px", padding:"10px"}}> Login with FaceBook</Button>
        <p style={{margin:"20px 0"}}>For futher support, you may visit the Help Center or contact our customer service Team</p>
        <div className="contain">
          <Data/>
        </div>
      </section>
    )
  }
}

export default Login