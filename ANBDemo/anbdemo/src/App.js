import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Router,Switch,Route,Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import Workfromhome from './Workfromhome';
import Workfrom from'./Workfrom';
import login from'./login';
import ResetPassword from'./ResetPassword';
import {history} from './history';
import Register from './Register';
import Employee from './Employee';
import EmployeeDetails from './EmployeeDetails';
import Anblicks from './Anblicks.png';
import StateRole from './login.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      StateRole:"",
    }
}
  
render() {
    if(localStorage.getItem('StateRole')==="Administrator")
      {
         return(
             <React.Fragment>
             <Router history={history}> 
              <Form className="Request-Form">
              <div className="header" style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                  <img src={Anblicks} alt="A Anblicks"></img>
                     <div className="header-right">
                         <a className="active" href="">mallesh</a>
                          <a href="/login">Logout</a>
                     </div>
               </div>
                <section style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                  <nav>
                    <ul className="icon-bar">
                       <li><Link to="/Workfrom">Manage Employees</Link></li>
                    </ul>
                 </nav>
               </section>
             </Form>
               <Switch>
                     <Route exact path='/' component={login}></Route>
                     <Route exact path='/ResetPassword' component={ResetPassword}></Route>
                     <Route exact path='/Register' component={Register}></Route>
                    <Route exact path='/Workfrom' component={Workfrom}></Route>
               </Switch>
             </Router>
             </React.Fragment>
         )}
         else if(localStorage.getItem('StateRole')==="Manager")
         {
            return(
                <React.Fragment>
                <Router history={history}> 
                 <Form className="Request-Form">
                 <div className="header" style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <img src={Anblicks} alt="A Anblicks"></img>
                        <div className="header-right">
                            <a className="active" href="">mallesh</a>
                             <a href="/login">Logout</a>
                        </div>
                  </div>
                  <div>
                   <section style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <nav>
                       <ul className="icon-bar">
                       <li><Link to="/EmployeeDetails">Edit User</Link></li>
                         <li><Link to="/EmployeeDetails">WFH Requests</Link></li>
                        <li><Link to="/EmployeeDetails">Apply WFH</Link></li>
                         <li><Link to="/EmployeeDetails">Edit WFH</Link></li>
                       </ul>
                    </nav>
                  </section>
                  </div>
                </Form>
                  <Switch>
                         <Route exact path='/' component={login}></Route>
                         <Route exact path='/ResetPassword' component={ResetPassword}></Route>
                         <Route exact path='/Register' component={Register}></Route>
                         <Route exact path='/EmployeeDetails' component={Employee}></Route>
                  </Switch>
                </Router>
                </React.Fragment>
            )}
            else if(localStorage.getItem('StateRole')==="Employee")
         {
            return(
                <React.Fragment>
                <Router history={history}> 
                 <Form className="Request-Form">
                 <div className="header" style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <img src={Anblicks} alt="A Anblicks"></img>
                        <div className="header-right">
                            <a className="active" href="">mallesh</a>
                             <a href="/login">Logout</a>
                        </div>
                  </div>
                   <section style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <nav>
                       <ul className="icon-bar">
                       <li><Link to="/Employee">Edit User</Link></li>
                         <li><Link to="/Employee">Apply WFH</Link></li>
                         <li><Link to="/Employee">Edit WFH</Link></li>
                       </ul>
                    </nav>
                  </section>
                </Form>
                  <Switch>
                         <Route exact path='/' component={login}></Route>
                         <Route exact path='/ResetPassword' component={ResetPassword}></Route>
                         <Route exact path='/Register' component={Register}></Route>
                         <Route exact path='/Workfrom' component={Workfrom}></Route>
                  </Switch>
                </Router>
                </React.Fragment>
            )}
            else if(localStorage.getItem('StateRole')==="Contractor")
         {
            return(
                <React.Fragment>
                <Router history={history}> 
                 <Form className="Request-Form">
                 <div className="header" style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <img src={Anblicks} alt="A Anblicks"></img>
                        <div className="header-right">
                            <a className="active" href="">mallesh</a>
                             <a href="/login">Logout</a>
                        </div>
                  </div>
                   <section style={{display:window.location.pathname==='/'||window.location.pathname==='/resetpassword'||window.location.pathname==='/Register'?"none":""}}>
                     <nav>
                       <ul className="icon-bar">
                              <li><Link to="/Workfrom">Edit User</Link></li>
                       </ul>
                    </nav>
                  </section>
                </Form>
                  <Switch>
                         <Route exact path='/' component={login}></Route>
                         <Route exact path='/ResetPassword' component={ResetPassword}></Route>
                         <Route exact path='/Register' component={Register}></Route>
                         <Route exact path='/Workfrom' component={Workfrom}></Route>
                  </Switch>
                </Router>
                </React.Fragment>
            )}
            else{
              return(
                <React.Fragment>
                <Router history={history}> 
                  <Switch>
                         <Route exact path='/' component={login}></Route>
                         <Route exact path='/ResetPassword' component={ResetPassword}></Route>
                         <Route exact path='/Register' component={Register}></Route>
                  </Switch>
                </Router>
                </React.Fragment>
              )
            }
    
}
}

export default App;
