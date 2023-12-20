const CheckBoxes=(next)=>{
  const[checked, setChecked] = React.useState(false)

  return(
   <>
    {checked ?  <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} variant='contained' color='secondary' onClick={next}>Continue</Button>:  <Button sx={{width:"400px", margin:"30px 0", padding:"10px"}} variant='contained' color='secondary' disabled>Continue</Button>}
   <FormControlLabel
      control={
      <Checkbox 
           checked={checked}
         onChange={(e)=> setChecked(e.target.checked)}
         inputProps={{ "aria-label":"secondary checkbox"}}
       />
     }label="I read consented to the Terms and Conditions">
    </FormControlLabel>  </>
 )
}
