import React, { Component } from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import MorePersonalDetails from "./MorePersonalDetails";
import UserPersonalDetatails from "./UserPersonalDetails";
import Sucess from "./Sucess";
import HomePage from "../Pages/HomePage";
import Cart from './Cart';

export class DataCompile extends Component {
    state ={
        step:1,
        email:"",
        password: "",
        firstName:"",
        lastName:"",
        tel:"",
        gender:"",
        birthDate:"",
        country:+234,
        checked:false
    }
    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step -1
        })
    }
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    checkedChange = input => e=>{
        this.setState({[input]:e.target.checked})
    }
  render() {
    const {step} = this.state;
    const {firstName, lastName,email,tel,password,gender,birthDate,checked} = this.state;
    const values = {firstName, lastName,email,tel,password,gender,birthDate,checked};
    switch (step) {
        case 1:
            return(
                <Login nextStep={this.nextStep} handleChange={this.handleChange} values={values.email}/>
            )
        case 2:
            return(
                <CreateAccount nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>
            )
        case 3:
            return(
                <UserPersonalDetatails nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>
            )
        case 4:
            return(
                <MorePersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep} checkedChange={this.checkedChange} />
            )
        case 5:
            return(
                <Sucess nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>
            )
        case 6:
            return(
                <HomePage nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>
            )
        case 7:
            return(
                <Cart nextStep={this.nextStep} handleChange={this.handleChange} values={values} prevStep={this.prevStep}/>
            )
        default:
            break;
    }
  }
}

export default DataCompile