import React, { Component } from 'react';
import Axios from 'axios';
import { history } from './history';
//import { Left } from 'react-bootstrap/lib/Media';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {

            FirstName: '',
            LastName: '',
            UserName: '',
            Email: '',
            firstNameerror: '',
            lastNameerror: '',
            userNameerror: '',
            emailerror: ''

        }
        this.saveUser = this.saveUser.bind(this);
    }
    onChange = (e) => {


        this.setState({ [e.target.name]: e.target.value });
        // this.state.firstNameerror = "",
        // this.state.lastNameerror = "",
        // this.state.userNameerror = "",
        // this.state.emailerror = ""
        //this.validate();
    }

    validate = () => {
        debugger;
        let firstNameerror = "";
        let lastNameerror = "";
        let userNameerror = "";
        let emailerror = ""
        if (!this.state.FirstName) {
            firstNameerror = 'FirstName is requaired !'
        }
        if (!this.state.LastName) {
            lastNameerror = 'LastName is requaired !'
        }
        if (!this.state.UserName) {
            userNameerror = 'UserName is requaired !'
        }

        if (!this.state.Email) {
            emailerror = 'Email address requaired !';
        }

        if (emailerror || firstNameerror || lastNameerror || userNameerror || emailerror) {
            this.setState({ emailerror, lastNameerror, firstNameerror, userNameerror, emailerror });
            return false;
        }
        return true;
    }


    saveUser = (e) => {
        e.preventDefault();
        let flag = this.validate();
        let user = { FirstName: this.state.FirstName, LastName: this.state.LastName, UserName: this.state.UserName, Email: this.state.Email };
        console.log(user);
        if (flag) {
            Axios.post('https://localhost:44330/api/Register/Register', user)
                .then((data) => {
                    console.log(data)
                    alert(data.data.statusMessage);
                    history.push('/');
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee Registration</h2>
                {/* <div className="content-wrapper">
                        <div className="col-sm-6 col-sm-offset-3 text">
                            <div className="card form-box">
                                <div className="row">
    
                                </div>
                            </div>
                        </div>
                    </div> */}
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-md-offset-2"></div>
                        <div className="mt-5 col-md-6 col-md-offset-6 border border-primary">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="text-center">
                                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                                        {/* <h2 class="text-center">Forgot Password?</h2> */}

                                        <div className="panel-body">
                                            <form id="register-form">

                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>FirstName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" placeholder="FirstName" name="FirstName" className="form-control" value={this.state.FirstName} onChange={this.onChange} onBlur={this.validate} />
                                                        {/* <span className="text-left mt-3" style={{ fontSize: 14, color: "red" }}>{this.state.firstNameerror}</span> */}
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span className="text-left mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.firstNameerror}</span>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>LastName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" placeholder="LastName" name="LastName" className="form-control" value={this.state.LastName} onChange={this.onChange} onBlur={this.validate} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.lastNameerror}</span>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>UserName : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" placeholder="UserName" name="UserName" className="form-control" value={this.state.UserName} onChange={this.onChange} onBlur={this.validate} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.userNameerror}</span>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>Email : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                        <input type="text" placeholder="Email" name="Email" className="form-control" value={this.state.Email} onChange={this.onChange} onBlur={this.validate} />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span style={{ fontSize: 14, color: "red" }}>{this.state.emailerror}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-lg btn-primary btn-block" onClick={this.saveUser}>Register</button>
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
        );
    }

}
export default Register;