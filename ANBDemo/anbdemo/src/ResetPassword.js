import React, { Component } from 'react';
import Axios from 'axios';





class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Password: '',
            Confirmpassword: '',
            Id: ''

        }
        this.saveUser = this.saveUser.bind(this);
    }

    onChange = (e) =>


        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let search = window.location.search;
        let params = new URLSearchParams(search);
        const IsSuperUser = params.get('IsSuperUser');
        console.log(IsSuperUser);
        let user = { Password: this.state.Password, Confirmpassword: this.state.Confirmpassword, Id: IsSuperUser };
        console.log(user);

        Axios.post('https://localhost:44394/api/ResetPassword/ResetPassword', user)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Reset Password</h2>
                <div className="content-wrapper">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row">
                                <form>
                                    <div className="row col-sm-12">
                                        <div className="form-group col-sm-6">
                                            <label>password:</label>
                                            <input type="password" placeholder="password" name="Password" className="form-control" value={this.state.Password} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group col-sm-6">
                                            <label>ConfirmPassword:</label>
                                            <input type="password" placeholder="ConfirmPassword" name="Confirmpassword" className="form-control" value={this.state.Confirmpassword} onChange={this.onChange} />

                                        </div>

                                    </div>

                                    <button className="btn btn-success" onClick={this.saveUser}>ResetPassword</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }

}

export default ResetPassword;