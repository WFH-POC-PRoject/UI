import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {history} from './history';
import GoogleLogin from 'react-google-login';
import './App';
import App from './App';
import { Router,Switch,Route} from 'react-router-dom';
//export {StateRole} from './login.js';
class login extends Component{
  
    constructor(props){
      super(props)
      this.state={
          UserName:"",
          PasswordHash:"",
      }
      localStorage.setItem('StateRole',"");
      localStorage.setItem('StateUserName',"");
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
        axios.post(`https://localhost:44362/Login`, obj)
        .then(response => {
            if(response.data.id=="1")
            {
              localStorage.setItem('StateRole',response.data.normalizedUserName);
              localStorage.setItem('StateUserName',response.data.userName);
                console.log(response);
                history.push('/Workfromhome');
                window.location.reload(true);
            }
            else if(response.data.id=="2")
            {

                alert("Incorrect Password");
            }
            else if(response.data.id=="3")
            {
              alert("Role has not been assigned to this user, Please contact administrator.");
            }
            else if(response.data.id=="4")
            {
                alert("Invalid User");
            }
        }).catch(err => {
            alert("Incorrect UserName or Password");
        });
      }
    
    render() {
      
      const responseGoogle = (response) => {

      }
      
      
      return(
        <Form className="login-form">
        <br/>
        <h1 className="font-weight-bold">Employee Management<span className="phone"></span></h1>
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
        <br/>
        <GoogleLogin style={{textAlign:"center"}}
          clientId="327606379568-tnqj9q11bmc9djul8rbef5ehckup9749.apps.googleusercontent.com" 
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="googlelogin text-center"
          theme="dark"
          longtitle="true"
        />
        <br/>
        <br/>
        <div className="text-center">
          <Link to="/Register">Register</Link>
          <span className="p-2">|</span>
          <a href="https://www.website.com/forgot-password/">Forgot Password</a>
  
        </div>
      </Form>
    );
    }
}
export default login;