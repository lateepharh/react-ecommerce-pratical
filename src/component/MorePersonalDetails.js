import React, { Component } from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, TextField, Typography, IconButton, Stack, MenuItem,FormControlLabel,Checkbox} from "@mui/material";
import ShoppingCartChecked from "@mui/icons-material/ShoppingCartCheckout";


export class MorePersonalDetails extends Component {
  continue = (e)=>{
    e.preventDefault();
    this.props.nextStep();
  }
  back = (e)=>{
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const {values, handleChange, values:{checked}}= this.props;
    return (
      <>
        <IconButton onClick={this.back} color='secondary'>
          <ArrowBackIcon/>
        </IconButton>
        <section>
          <IconButton color='secondary'><ShoppingCartChecked/></IconButton>
          <Typography variant='h5' sx={{margin:"15px 0"}}>Personal Details</Typography>
          <Typography variant=' p' sx={{marginBottom:"15px"}}color={'gray'}>Almost there.... Just a few more details.</Typography>
          <Stack spacing={3}>
              <TextField select color='secondary' value={values.gender} onChange={handleChange("gender")} required label="Gender" sx={{width:"400px"}}>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male"> Male</MenuItem>
              </TextField>
              <TextField onChange={handleChange("date")} type='date' defaultValue={values.date} required size='large' color='secondary' sx={{width:"400px"}}/>
            {/* <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={this.continue} variant='contained' color='secondary'>Continue</Button> */}
            {checked ?  <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} variant='contained' color='secondary' onClick={this.continue}>Continue</Button>:  <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} variant='contained' color='secondary' disabled>Continue</Button>}
          </Stack>
          <FormControlLabel
            control={
              <Checkbox 
                checked={checked}
                onChange={handleChange("checked")}
                inputProps={{ "aria-label":"secondary checkbox"}}
               />
              }label="I read and consented to the Terms and Conditions">
          </FormControlLabel>
          <p style={{margin:"20px 0"}}>For futher support, you may visit the Help Center or contact our customer service Team</p>
        </section>
      </>
    )
  }
}

export default MorePersonalDetails