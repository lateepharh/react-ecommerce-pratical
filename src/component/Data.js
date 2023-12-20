import React from 'react';
import {Card,IconButton} from "@mui/material";
import {Add,Remove} from "@mui/icons-material";
import "../index.css"
const data = [
    {
        id:1,
        title:"Do i have to allow the use of cookies?",
        info:"Accepting cookies is by choice, it is not compulsory to do so. You can stiil register and acces our website without the use of cookies."
    },
    {
        id:2,
        title:"How do i change and reset my Passward?",
        info:"Changing and resetting your account passord is easy and seamless. You just have to click on the forget passord button and follow the steps. if you do so , Viola your account passoward has been changed successfully"
    },
    {
        id:3,
        title:"Must i input my Bank info before having an Account?",
        info:"No!!!, You do not need to input your bank info to register."
    },
    {
        id:4,
        title:"Must i input my Bank info before having an Account?",
        info:"No!!!, You do not need to input your bank info to register."
    }
]

function Data() {
    // const [questions, setQuestion]= React.useState(data);
  return (
    <main className='container'>
        <h5>FAQS</h5>
        <Card className='card'>
            {data.map((question)=> {
                return <FAQquestion key={question.id} {...question}/>
            })}
        </Card>
    </main>
  )
}
 const FAQquestion= (props)=>{
    const [showDetails, setShowDetails] = React.useState(false)
    const {title, info}=props;
    return(
        <>
        <header className='header'>
            <h5>{title}</h5>
            <IconButton onClick={()=> setShowDetails(!showDetails)} color='secondary'>
                {showDetails ? <Remove/> : <Add/>}
            </IconButton>
        </header>
        {
            showDetails && <p>{info}</p>
        }
        </>
    )
 }

export default Data