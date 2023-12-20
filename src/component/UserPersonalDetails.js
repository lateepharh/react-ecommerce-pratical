import React, { Component } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, TextField, Typography, IconButton, Stack, MenuItem} from "@mui/material";
import ShoppingCartChecked from "@mui/icons-material/ShoppingCartCheckout";


export class UserPersonalDetails extends Component {
  continue = (e)=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back = (e)=>{
    e.preventDefault();
    this.props.prevStep();
  }
  
 
  render() {
    const {values, handleChange}= this.props;
    return (
      <>
        <IconButton onClick={this.back} color='secondary'>
          <ArrowBackIcon/>
        </IconButton>
        <section>
          <IconButton color='secondary'><ShoppingCartChecked/></IconButton>
          <Typography variant='h5' sx={{margin:"15px 0"}}>Personal Details</Typography>
          <Typography variant=' p' sx={{marginBottom:"15px"}}color={'gray'}>We just  need you to fill  in some details.</Typography>
          <Stack spacing={3}>
            <TextField type='text' value={values.firstName} onChange={handleChange("firstName")}  size='large' sx={{width:"400px"}} required label="First Name"/>
            <TextField type='text' required defaultValue={values.lastName} label="Last Name" variant='outlined' size='large' sx={{width:"400px"}} onChange={handleChange("lastName")} color='secondary'/>
            <Stack sx={{display:'flex',gap:"5px", flexDirection:"row"}}>
              <TextField select color='secondary' value={values.country} onChange={handleChange("country")} required label="Prefix" sx={{width:"100px"}}>
                <MenuItem value="+965"> +965</MenuItem>
                <MenuItem value="+352"> +352</MenuItem>
                <MenuItem value="+234"> +234</MenuItem>
                <MenuItem value="+212"> +212</MenuItem>
                <MenuItem value="+31"> +31</MenuItem>
              </TextField>
              <TextField onChange={handleChange("tel")} label="Phone Number" type='number' defaultValue={values.tel} required size='large' color='secondary' sx={{width:"300px"}}/>
            </Stack>
            <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={this.continue} variant='contained' color='secondary'>Continue</Button>
          </Stack>
          <p style={{margin:"20px 0"}}>For futher support, you may visit the Help Center or contact our customer service Team</p>

        </section>
      </>
    )
  }
}

export default UserPersonalDetails