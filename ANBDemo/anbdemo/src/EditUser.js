import React, { Component } from 'react';
import './App.css';
import { Form, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


class EditUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dept:[],
            Id:localStorage.getItem('StateUserId'),
            UserName:"",
            FirstName:"",
            LastName:"",
            Email:"",

            firstNameerror: '',
            lastNameerror: '',
            userNameerror: '',
            emailerror: ''
        }
        
        this.saveUser = this.saveUser.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.validate();
    }

    componentDidMount() {
        const value = "";
        axios.get('https://localhost:44359/api/Employee/GetAllEmployees?value=' + this.state.Id)
            .then(response => {
                console.log(response)
                this.setState({ dept: response.data });
                this.setState({
                            Id:response.data[0].id,
                            UserName:response.data[0].userName,
                            FirstName:response.data[0].firstName,
                            LastName:response.data[0].lastName,
                            Email:response.data[0].email,
                        })
            })
            .catch((err) => {
                console.log(err);
            })
        
    }
    validate = () => {
        let firstNameerror = "";
        let lastNameerror = "";
        let userNameerror = "";
        let emailerror = ""
        if (!this.state.FirstName) {
            firstNameerror = 'FirstName is required !'
        }
        if (!this.state.LastName) {
            lastNameerror = 'LastName is required !'
        }
        
        if (!this.state.UserName) {
            userNameerror = 'UserName is required !'
        }
        if (!this.state.Email) {
            emailerror = 'Email address required !';
        }
        

        if (emailerror || firstNameerror || lastNameerror || userNameerror) {
            this.setState({ emailerror, lastNameerror, firstNameerror, userNameerror});
            return false;
        }
        return true;
    }
      
    saveUser = (e) => {
        e.preventDefault();
        let val = this.validate();
        let user = { Id:parseInt(localStorage.getItem('StateUserId')), FirstName: this.state.FirstName, LastName: this.state.LastName, UserName: this.state.UserName, Email: this.state.Email };
        console.log(user);
        if (val) {
            
            axios.post('https://localhost:44353/api/UpdateEmployee', user)
                .then((data) => {
                    if(data.data.statusCode == 200)
                    {
                        alert(data.data.statusMessage);
                    }
                    else{
                        alert(data.data.statusMessage);
                        return false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }
    render(){
        return(
            <div>
                <br/>
            <h3 className="font-weight-bold text-center" style={{color:"#33b5e5"}} >Edit User<span className="phone"></span></h3>
            <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-offset-2" style={{backgroundColor:"white"}}></div>
                        <div className="mt-5 col-md-6 col-md-offset-6 border border-primary">
                            <div className="panel panel-default mt-4">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3><i className="fa fa-lock fa-4x"></i></h3>

                                        <div className="panel-body">
                                            <form id="register-form">

                                                <div className="row ">
                                                    <div className="col-sm-3 text-right col-sm-padding">
                                                        <span>FirstName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" name="FirstName" className="form-control" defaultValue={this.state.FirstName} onChange={this.onChange} onBlur={this.onChange} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span className="text-left mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.firstNameerror}</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>LastName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" name="LastName" className="form-control" defaultValue={this.state.LastName} onChange={this.onChange} onBlur={this.onChange} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.lastNameerror}</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>UserName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" name="UserName" className="form-control" defaultValue={this.state.UserName} onChange={this.onChange} onBlur={this.onChange} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.userNameerror}</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>Email : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" name="Email" className="form-control" defaultValue={this.state.Email} onChange={this.onChange} onBlur={this.onChange} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.emailerror}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-lg btn-success" onClick={this.saveUser}>Update</button>
                                                </div>     
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

        )
    }

}
export default EditUser;