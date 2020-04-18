import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { Table } from 'react-bootstrap';
import { Modal, Button, ButtonToolbar, Row, Col, Form } from 'react-bootstrap';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PageName:"Employee",
            show: false,
            dept: []

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
            <Form className="Request-Form">
            <div>
                <table>
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
                                <td className="text-center"><Button className="btn btn-sm btn-primary btn-block" onClick={this.handleModele}>AsignRole</Button></td>
                                <td className="text-center">{dep.userName} </td>
                                <td className="text-center">{dep.firstName}</td>
                                <td className="text-center">{dep.lastName}</td>
                                <td className="text-center">{dep.email}</td>
                                <td className="text-center">{dep.roleName}</td>
                                <td className="text-center"></td>

                            </tr>
                        )}
                    </tbody>
                </table>

                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                   </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModele()}}>Close</Button>
                    </Modal.Footer>
                </Modal>






            </div>
            </Form>
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
    handleModele() {
        this.setState({ show: true });
        console.log(this.state);


    }
}

export default Employee;