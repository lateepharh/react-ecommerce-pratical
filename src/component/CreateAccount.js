import React, { Component } from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, TextField, Typography, IconButton, Stack} from "@mui/material";
import ShoppingCartChecked from "@mui/icons-material/ShoppingCartCheckout";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment"


export class CreateAccount extends Component {
  continue = (e)=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back = (e)=>{
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values:{email,password}, handleChange}= this.props
    return (
      <>
      <IconButton onClick={this.back} color='secondary'>
        <ArrowBackIcon/>
      </IconButton>
      <section>
        <IconButton color='secondary'><ShoppingCartChecked/></IconButton>
        <Typography variant='h5' sx={{margin:"15px 0"}}>Create Your Account</Typography>
        <Typography variant=' p'  color={'gray'}>Lets get started by creating your account.</Typography>
        <Typography variant=' p' sx={{marginBottom:"15px"}}color={'gray'}>To keep your account safe, we need a strong password</Typography>
        <Stack spacing={6}>
          <TextField type='text' value={email} variant='filled' size='small' sx={{width:"400px"}} InputProps={{
            endAdornment: <InputAdornment position='start' color="secondary">Edit</InputAdornment>
          }}/>
          <TextField type='password' required defaultValue={password} label="Password" variant='outlined' size='small' sx={{width:"400px"}} onChange={handleChange("password")} color='secondary'  InputProps={{
            endAdornment: <InputAdornment position='start'><VisibilityOff/></InputAdornment>
          }}/>
          <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={this.continue} variant='contained' color='secondary'>Continue</Button>
        </Stack>
        <p style={{margin:"20px 0"}}>For futher support, you may visit the Help Center or contact our customer service Team</p>

      </section>
      </>
    )
  }
}

export default CreateAccount