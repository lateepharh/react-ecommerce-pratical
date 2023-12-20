import React from 'react';
import { useState,useEffect } from 'react';
import LinearProgress from "@mui/material/LinearProgress"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button, Typography, IconButton} from "@mui/material";
import ShoppingCartChecked from "@mui/icons-material/ShoppingCartCheckout";

function Sucess(props) {
  const { values:{firstName}}= props
  const [data, setData] = useState(null);
  const [progress, setProgress]= useState(0);
  const [isLoading, setIsloading]= useState(true);
  const Handler = (e)=>{
    e.preventDefault();
    props.nextStep();
  }
  const backHandler = (e)=>{
    e.preventDefault();
    props.prevStep();
  }
  
  useEffect(()=>{
    setTimeout(()=>{
      setData(()=>{
        return(
          <>
            <IconButton onClick={backHandler} color='secondary'>
              <ArrowBackIcon/>
            </IconButton>
            <section>
              <IconButton color='secondary'><ShoppingCartChecked/></IconButton>
              <Typography variant='h5' sx={{margin:"15px 0"}}>
              {firstName}, Your Account has been created!</Typography>
              {isLoading ? <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={Handler} variant='contained' color='secondary' diasbled>Continue</Button> : <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} onClick={Handler} variant='contained' color='secondary'>Continue</Button>}
            </section>
          </>
        )
      });
      setIsloading(false);
    },7000);
  },);
  useEffect(()=>{
    setTimeout(()=>{
      setProgress((newProgress)=> newProgress >= 100 ? 0 : newProgress +10)
    }, 7000)
  },[]);
  if (isLoading) {
    return(
      <>
      <IconButton onClick={backHandler} color='secondary' >
        <ArrowBackIcon/>
      </IconButton>
      <section>
         <LinearProgress variant='determinate' value={progress} sucess/>
          <Typography variant="p" color="gray" disabled>A few second to process the registration </Typography>
          <Button disabled sx={{width:"400px", margin:"25px 0"}} variant='contained'>COntinue</Button>
      </section>
      </>
    )
  }
  
  return (
    <>
    <div>{data}</div>
    </>
  )
}

export default Sucess