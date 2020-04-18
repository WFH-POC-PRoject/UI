import React, { Component } from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
//import { Item } from 'react-bootstrap/lib/Breadcrumb';




class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            dept: [],
            id: 0

        }
        this.handleModele = this.handleModele.bind(this);
    }


    componentDidMount() {
        this.refreshlist();
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



    render() {
        const { dept } = this.state;
        return (
            <div>
                <Table className="mt-5 table table-bordered " striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#Action</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>RoleName</th>
                            <th>Manager</th>
                            {/* <th>LastName</th>
                        <th>Email</th>
                        <th>RoleName</th>lastName,email,roleName,roleId */}
                        </tr>
                    </thead>


                    <tbody>
                        {dept.map(dep =>
                            <tr key={dep.userId}>
                                <td className="text-center"><Button className="btn btn-sm btn-primary btn-block" onClick={this.handleModele} id={dep.userId}>AsignRole</Button></td>
                                <td className="text-center">{dep.userName} </td>
                                <td className="text-center">{dep.firstName}</td>
                                <td className="text-center">{dep.lastName}</td>
                                <td className="text-center">{dep.email}</td>
                                <td className="text-center">{dep.roleName}</td>
                                <td className="text-center"></td>

                            </tr>
                        )}
                    </tbody>
                </Table>

                <Modal size="md" aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Role And Manager
                   </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form id="register-form">

                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>FirstName : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="FirstName" name="FirstName" disabled className="form-control" value={this.state.FirstName} />
                                        {/* <span className="text-left mt-3" style={{ fontSize: 14, color: "red" }}>{this.state.firstNameerror}</span> */}
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>LastName : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="LastName" name="LastName" disabled className="form-control" value={this.state.LastName} />
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>UserName : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="UserName" name="UserName" disabled className="form-control" value={this.state.UserName} />
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>Email : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="Email" name="Email" disabled className="form-control" value={this.state.Email} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>AssignRole : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="AssignRole" name="AssignRole" className="form-control" value={this.state.AssignRole} onChange={this.onChange} onBlur={this.validate} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-3 text-right col-sm-padding mt-1">
                                        <span>AssignManager : </span>
                                    </div>
                                    <div className="col-sm-8 form-group">
                                        <input type="text" placeholder="AssignManager" name="AssignManager" className="form-control" value={this.state.AssignRole} onChange={this.onChange} onBlur={this.validate} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-primary btn-block" onClick={this.saveUser}>AssignRole</button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModeleClose() }}>Close</Button>
                    </Modal.Footer>
                </Modal>






            </div>
        )

        const { dept1 } = this.state;
        // return (

        //     <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
        //         centered show={true}
        //     >
        //         <Modal.Header closeButton>
        //             <Modal.Title id="contained-modal-title-vcenter">
        //                 Modal heading
        //            </Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <div className="container">

        //             </div>
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button >Close</Button>
        //         </Modal.Footer>
        //     </Modal>

        // )

    }
    handleModele = e => {

        this.setState({ show: true });
        console.log(this.state);
        console.log(e.target.id);
        console.log(this.state.dept);
       //let employees: this.state.employees.filter((item, itemIndex) => (index != itemIndex)),
       let employees = this.state.dept.filter((Item,Index)=>(Index==e.target.id))
       console.log(employees);
            
        
}
    handleModeleClose() {
        this.setState({ show: false });
        console.log(this.state);
    }
}

export default Employee;