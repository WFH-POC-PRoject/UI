import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { Table } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import { history } from './history';
//import { Item } from 'react-bootstrap/lib/Breadcrumb';
const options = [
    { value: '2', label: 'Manager' },
    { value: '3', label: 'Employee' },
    { value: '4', label: 'Contractor' },

];
class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roleNameerror: '',
            managerNameerror: '',
            UserId: '',
            FirstName: '',
            LastName: '',
            UserName: '',
            Email: '',
            AssignRole: '',
            AssignManager: '',
            PageName: "Employee",
            show: false,
            dept: [],
            allManagers: [],
            id: 0,
            selectedOption: null,
            selectedmanager: null,
            defaultsectrole: null,
            defaultselectmgr: null,
            defaultsectroleval: null,
            defaultselectmgrval: null
           
        }
        this.refreshlist();
        this.getAllManagers();
        this.handleModele = this.handleModele.bind(this);
        
        this.saveUserRoleManager = this.saveUserRoleManager.bind(this);
    }

    // componentDidMount() {
    //    //this.refreshlist();
    //     this.getAllManagers();
    // }

    getAllManagers() {
        Axios.get('https://localhost:44354/api/GetAllManagers/GetAllManagers')
            .then(response => {
                console.log(response.data)
                this.setState({ allManagers: response.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }



    refreshlist() {
        const value = "";
        Axios.get('https://localhost:44359/api/Employee/GetAllEmployees?value=' + value)
            .then(response => {
                console.log(response)
                this.setState({ dept: response.data });
            })
            .catch((err) => {
                console.log(err);
            })


        // this.setState({
        //     dept: [{ "UserID": 1, "UserName": "Sriram", "FirstName": "Sri" },
        //     { "UserID": 2, "UserName": "Mallesh", "FirstName": "M" },
        //     { "UserID": 3, "UserName": "Mallesh", "FirstName": "M" },
        //     { "UserID": 4, "UserName": "Mallesh", "FirstName": "M" }]
        // })
    }
    validate = () => {
        debugger;
        let roleNameerror = "";
        let managerNameerror = "";

        if ((this.state.selectedOption == null&&this.state.defaultsectroleval=="")) {
            roleNameerror = 'Role is requaired !'
        }
        if (this.state.selectedmanager==null&&this.state.defaultselectmgrval=="") {
            managerNameerror = 'Manager is requaired !'
        }
        if (roleNameerror || managerNameerror) {
            this.setState({ roleNameerror, managerNameerror });
            return false;
        }
        return true;
    }

    saveUserRoleManager() {
        let flag = this.validate();
        const value = "";
        let AssignRoleAndManager = {
            UserId: this.state.UserId,
            RoleId: parseInt(this.state.selectedOption?this.state.selectedOption:this.state.defaultsectroleval),
            Managerid: this.state.selectedmanager?this.state.selectedmanager:this.state.defaultselectmgrval,
            UserName: this.state.UserName,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email
        };
        console.log(this.state.defaultsectroleval);
        console.log(this.state.defaultselectmgrval);
        console.log(AssignRoleAndManager);
        console.log("before server call",flag);
        if (flag) {
            console.log("server call",flag);
            Axios.post('https://localhost:44307/api/AssignRoleAndManager/AssignRoleAndManager', AssignRoleAndManager)
                .then((data) => {
                    if (data.data.statusCode == 200) {
                        alert(data.data.statusMessage);
                        history.push('/Employee');
                        window.location.reload();
                    }
                    else {
                        alert(data.data.statusMessage);
                        return false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else{
            console.log("before server call",flag);
            this.setState({ show: true });
            //this.handleModele();
            return false;
        }
        
    }



    render() {
        const { dept } = this.state;
        return (
            <Form className="Request-Form">
                <div>
                    <table className="mt-6 border">
                        <thead>
                            <tr>
                                <th className="text-left">Action</th>
                                <th className="text-left">User Name</th>
                                <th className="text-left">First Name</th>
                                <th className="text-left">Last Name</th>
                                <th className="text-left">Email</th>
                                <th className="text-left">Role Name</th>
                                <th className="text-left">Manager</th>
                                {/* <th>LastName</th>
                        <th>Email</th>
                        <th>RoleName</th>lastName,email,roleName,roleId */}
                            </tr>
                        </thead>


                        <tbody>
                            {dept.map(dep =>
                                <tr key={dep.userId}>
                                    <td className="text-center"><Button className="btn btn-sm btn-primary btn-block" onClick={this.handleModele} id={dep.userId}>Select</Button></td>
                                    <td className="text-left">{dep.userName} </td>
                                    <td className="text-left">{dep.firstName}</td>
                                    <td className="text-left">{dep.lastName}</td>
                                    <td className="text-left">{dep.email}</td>
                                    <td className="text-left">{dep.roleName}</td>
                                    <td className="text-left">{dep.managerName}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>

                    <Modal  size="md" aria-labelledby="contained-modal-title-vcenter"
                        centered show={this.state.show} 
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <h3 className="font-weight-bold text-center">Add Role And Manager<span className="phone"></span></h3>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container">
                                <form id="register-form">

                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>FirstName : </span>
                                        </div>
                                        <div className="col-sm-8 form-group">
                                            <input type="text" placeholder="FirstName" name="FirstName" disabled className="form-control" value={this.state.FirstName} />
                                            {/* <span className="text-left mt-3" style={{ fontSize: 14, color: "red" }}>{this.state.firstNameerror}</span> */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>LastName : </span>
                                        </div>
                                        <div className="col-sm-8 form-group">
                                            <input type="text" placeholder="LastName" name="LastName" disabled className="form-control" value={this.state.LastName} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>UserName : </span>
                                        </div>
                                        <div className="col-sm-8 form-group">
                                            <input type="text" placeholder="UserName" name="UserName" disabled className="form-control" value={this.state.UserName} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>Email : </span>
                                        </div>
                                        <div className="col-sm-8 form-group">
                                            <input type="text" placeholder="Email" name="Email" disabled className="form-control" value={this.state.Email} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>Role : </span>
                                        </div>

                                        {/* roleNameerror, managerNameerror<input type="text" placeholder="Select Role..." name="AssignRole" className="form-control" value={this.state.AssignRole} onChange={this.onChange} onBlur={this.validate} /> */}
                                        <div className="col-sm-8 form-group">
                                            <Select name="AssignRole" name="AssignRole" placeholder="--Select--" defaultValue={{ label: this.state.defaultsectrole, value: this.state.defaultsectroleval }} options={options} onChange={this.onChangeRole} />
                                            <span className="mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.roleNameerror}</span>
                                        </div>
                                       
                                           
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 text-right col-sm-padding mt-1">
                                            <span>Manager : </span>
                                        </div>
                                        <div className="col-sm-8 form-group">
                                            <Select name="AssignManager" placeholder="--Select--" name="AssignManager" defaultValue={{ label: this.state.defaultselectmgr, value: this.state.defaultselectmgrval }} options={this.state.allManagers} onChange={this.onChangeManager} />
                                            <span className="mt-2" style={{ fontSize: 14, color: "red" }}>{this.state.managerNameerror}</span>                                     
                                            {/* <Select name="AssignManager" options onChange={this.onChangeManager}>
                                                {this.state.allManagers.map((Item, i) =>12Sri34
                                                    <option key={i} value={Item.value}>{Item.label}</option>)}
                                            </Select> */}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block" type="button"  onClick={()=>{this.saveUserRoleManager()}}>Assign</button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => { this.handleModeleClose() }}>Close</Button>
                        </Modal.Footer>
                    </Modal>



                </div>
            </Form>
        )

        const { dept1 } = this.state;


    }
    handleModele = e => {

        this.setState({ show: true });
        console.log(this.state);
        console.log(e.target.id);
        console.log(this.state.dept);
        let employees = this.state.dept.filter((Item) => (Item.userId == e.target.id))
        console.log(employees);
        this.setState({
            FirstName: employees[0].firstName,
            LastName: employees[0].lastName,
            UserName: employees[0].userName,
            Email: employees[0].email,
            UserId: employees[0].userId,
            defaultsectrole: employees[0].roleName ? employees[0].roleName : "--Select--",
            defaultselectmgr: employees[0].managerName ? employees[0].managerName : "--Select--",
            defaultsectroleval: employees[0].roleId ? employees[0].roleId : "",
            defaultselectmgrval: employees[0].managerId ? employees[0].managerId : ""

        });


    }
    handleModeleClose() {
        this.setState({ show: false });
        console.log(this.state);
        window.location.reload();
    }

    onChangeRole = selectedOption => {
        this.setState({
            selectedOption: selectedOption.value
        })
        console.log(`Option selected role:`, selectedOption.value);
    }

    onChangeManager = selectedmanager => {
        this.setState({
            selectedmanager: selectedmanager.value
        })
        console.log(`Option selected manager:`, selectedmanager.value);
    }
}

export default Employee;