import React,{Component} from 'react';
import './App.css';
import {Button,FormGroup,Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EmployeeDetails extends  Component{
    constructor(props){

        super(props)
        this.state={
          empdata:[],
            UserName:"",
            FirstName:"",
            LastName:"",
            Email:"",
            Button:"Edit",
        }

      }
      componentDidMount(){
        let obj={}
        obj.UserName=this.state.UserName;
        obj.FirstName=this.state.FirstName;
        obj.LastName=this.state.LastName;
        obj.Email=this.state.Email;
        console.log(obj);
        axios.get('https://localhost:44366/api/Emp',obj)
        .then(response => {
           console.log(response);
           this.setState({
             empdata:response.data
           })
        }).catch(err => {
            alert("Details are not updated...!");
          console.log("err");
        });
        console.log(this.state);
      }
      
      handleuser(text){
        this.setState({UserName:text.target.value})
      }
      handlefirstname(text){
        this.setState({FirstName:text.target.value})
      }
      handlelastname(text){
          this.setState({LastName:text.target.value})
      }
      handleemail(text)
      {
          this.setState({Email:text.target.value})
      }
      editMode(index, event){
        console.log('item index = ', index);
    }
    
    render(){
        return(
            <Form className="Request-Form">
           
<div className="text-center">
  <br/>
  <div id="emp">
    <table className="tablefor">
      <th id="emp1">User Name</th>
      <th id="emp1">First Name</th>
      <th id="emp1">Last Name</th>
      <th id="emp1">Email</th>
      <th id="emp1">Action</th>
      <br/>
    {this.state.empdata &&this.state.empdata.map(d => <tr id="text">
    <td className="text-center" key={d.userName}>{d.userName}</td>
    <td className="text-center">{d.firstName}</td>
    <td className="text-center">{d.lastName}</td>
    <td className="text-center">{d.email}</td>
    <td>
    <button className="btn btn-primary btn-xs" onClick={this.editMode} data-title="Edit" data-toggle="modal" data-target="#edit">Edit 🖉</button>
    </td>
    </tr>
     
    )}
   </table>
  </div>
</div>
            </Form>
        );
    }
}
export default EmployeeDetails;





