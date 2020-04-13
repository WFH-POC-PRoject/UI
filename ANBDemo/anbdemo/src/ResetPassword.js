import React, { Component } from 'react';
import Axios from 'axios';
import { history } from './history';




class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Password: '',
            Confirmpassword: '',
            Id: '',
            Passworderror: '',
            Confirmpassworderror: '',
            PasswordMatcherror: ''

        }
        this.saveUser = this.saveUser.bind(this);
        this._handleNewPassword = this._handleNewPassword.bind(this);
        this._handleConfirmedPassword = this._handleConfirmedPassword.bind(this);
    }


    _handleNewPassword = () => {
        debugger;
        let Passworderror = "";
        if (!this.state.Password) {
            Passworderror = 'Password is requaired !'
        }
        if (this.state.Password) {
            Passworderror = ''
           
        }
        if (Passworderror) {
            this.setState({ Passworderror });
            return false;
        }
        return true;
    }

    _handleConfirmedPassword = () => {
        debugger;
        let Confirmpassworderror = "";
        if (!this.state.Confirmpassword) {
            Confirmpassworderror = 'Confirmpassword is requaired !'
        }
        if (this.state.Confirmpassword) {
            Confirmpassworderror = ''
        }
        if (Confirmpassworderror) {
            this.setState({ Confirmpassworderror });
            return false;
        }
        return true;
    }

    _handlePasswordMatch = () => {
        debugger;
        let PasswordMatcherror = "";
        if (this.state.Password == ""&&this.state.Confirmpassword =="") {
            return false;
        }
        if (this.state.Password == this.state.Confirmpassword) {
            return true;
        }
        else {
            PasswordMatcherror = 'Password is miss match !'
        }

        if (PasswordMatcherror) {
            this.setState({ PasswordMatcherror });
            return false;
        }
        return true;
    }



    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        this._handleNewPassword();
        this._handleConfirmedPassword();
        let flag = this._handlePasswordMatch();
        let search = window.location.search;
        let params = new URLSearchParams(search);
        const IsSuperUser = params.get('IsSuperUser');
        console.log(IsSuperUser);
        let user = { Password: this.state.Password, Confirmpassword: this.state.Confirmpassword, Id: IsSuperUser };
        console.log(user);

        if (flag) {
            Axios.post('https://localhost:44394/api/ResetPassword/ResetPassword', user)
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
                <h2 className="text-center">Reset Password</h2>
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
                                        <p>You can reset your password here.</p>
                                        <div className="panel-body">
                                            <form id="register-form">
                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>Password : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                    <input type="password" required placeholder="Password" name="Password" className="form-control" value={this.state.Password} onChange={this.onChange} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span className="text-left mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.Passworderror}</span>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                                        <span>ConfirmPassword : </span>
                                                    </div>
                                                    <div className="col-sm-8 form-group">
                                                    <input type="password" required placeholder="ConfirmPassword" name="Confirmpassword" className="form-control" value={this.state.Confirmpassword} onChange={this.onChange} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' />
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span className="text-left mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.Confirmpassworderror}</span>
                                                   
                                                    </div>
                                                    <div className="col-sm-10 form-group">
                                                    <span className="text-left mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.PasswordMatcherror}</span>
                                                    </div>
                                                </div>


                                                <div className="form-group">
                                                    <button className="btn btn-lg btn-primary btn-block" onClick={this.saveUser}>ResetPassword</button>
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

export default ResetPassword;