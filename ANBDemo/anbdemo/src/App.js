import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Router,Switch,Route,Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { GoogleLoginButton,FacebookLoginButton } from 'react-social-login-buttons';
import FacebookLogin from 'react-facebook-login';
import Workfromhome from './Workfromhome';
import Workfrom from'./Workfrom';
import login from'./login';
import ResetPassword from'./ResetPassword';
import {history} from './history';
import Register from './Register';
import Employee from './Employee';
import EmployeeDetails from './EmployeeDetails';

//import GoogleLogin from 'react-google-login';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        // UserName:"",
        // PasswordHash:""
    }
  }
  // handleuser(text){
  //   this.setState({UserName:text.target.value})
  // }
  // handlepassword(text){
  //   this.setState({PasswordHash:text.target.value})
  // }
  // login(){
  //   let obj={}
  //   obj.UserName=this.state.UserName;
  //   obj.PasswordHash=this.state.PasswordHash;
  //   console.log(obj);
  //   axios.post(`https://localhost:44362/LoginApi`, obj)
  //   .then((response) => {
  //     console.log(response);
  //   }).catch(err => {
  //     console.log("err");
  //   });
  // }

render() {
  // const responseFacebook = (response) => {
  //   console.log(response);
  // }
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
   <React.Fragment>
      <Router history={history}> 
      <Switch>
        <Route exact path='/Workfromhome' component={Workfromhome}></Route>
        <Route exact path='/' component={login}></Route>
        <Route exact path='/Workfrom' component={Workfrom}></Route>
        <Route exact path='/EmployeeDetails' component={EmployeeDetails}></Route>
        <Route exact path='/login' component={login}></Route>
        <Route exact path='/ResetPassword' component={ResetPassword}></Route>
        <Route exact path='/Register' component={Register}></Route>
        <Route exact path='/Employee' component={Employee}></Route>
        
      </Switch>
    </Router>
    </React.Fragment>
  );
}
}

export default App;
