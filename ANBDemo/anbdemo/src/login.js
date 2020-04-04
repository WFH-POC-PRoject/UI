import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { GoogleLoginButton,MicrosoftLoginButton } from 'react-social-login-buttons';
import {history} from './history';
import GoogleLogin from 'react-google-login';

class login extends Component{
    constructor(props){
      super(props)
      this.state={
          UserName:"",
          PasswordHash:"",
      }
    }
    handleuser(text){
      this.setState({UserName:text.target.value})
    }
    handlepassword(text){
      this.setState({PasswordHash:text.target.value})
    }

    login(){
        
        let obj={}
        obj.UserName=this.state.UserName;
        obj.PasswordHash=this.state.PasswordHash;
        console.log(obj);
        axios.post(`https://localhost:44362/LoginApi`, obj)
        .then(response => {
            if(obj!=obj.UserName&&this.state.PasswordHash=="Test123!")
            {
                console.log(response);
                history.push('/Workfromhome');
            }
        }).catch(err => {
            alert("Incorrect UserName or Password");
          console.log("err");
        });
      }
    
    render() {
      const responseFacebook = (response) => {
        console.log(response);
      }
      const responseGoogle = (response) => {
        console.log(response);
      }

      return(
        <Form className="login-form">
        <br/>
        <h1 className="font-weight-bold">ANB Demo <span className="phone"></span></h1>
        <br/>
        <br/>
        <FormGroup>
          <Label className="text-left">UserName</Label>
          <Input type="text" placeholder="Username" onChange={(text)=>{this.handleuser(text)}}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password" onChange={(text)=>{this.handlepassword(text)}}></Input>
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block" onClick={()=>{this.login()}}>Log In</Button>
        <div className="text-center pt-3">
          Or Continue with your social account
        </div>
        <GoogleLoginButton>
        {/* <GoogleLogin className="goocolor"
          clientId="146986635497-l8j3se945013oktrfskdk5uladive00j.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        /> */}
        </GoogleLoginButton>
        <MicrosoftLoginButton className="mt-3 mb-3">
        {/* <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
        /> */}
      </MicrosoftLoginButton>
        
        <div className="text-center">
          <a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp">Sign Up</a>
          <span className="p-2">|</span>
          <a href="https://www.website.com/forgot-password/">Forgot Password</a>
  
        </div>
      </Form>
    );
    }
}
export default login;