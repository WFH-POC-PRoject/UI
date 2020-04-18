import React,{Component} from 'react';
import './App.css';
import {Button,FormGroup,Form} from 'reactstrap';
import {Link} from 'react-router-dom';

class Workfrom extends  Component{
  constructor(props) {
    super(props);
    this.state = {

    }
}
    WFH(){
        alert('workfromhome page is ready to soon!...')
    }
    render(){
        return(
            <Form className="Request-Form">

                <label className="wf"><b>&emsp;Workfrom Home Report Table :</b></label>
                <br/>
                <br/>
                <br/>
            <div className="text-center">
                <table className="text-center">
                    <tr className="text-center">
                      <th>Apply Date</th>
                      <th>WFH-Confirmation-Date</th>
                      <th>Status</th>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">15-01-2020</td>
                      <td className="text-center">23-01-2020</td>
                      <td className="text-center">Approved</td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">12-02-2020</td>
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">Pending</td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">23-03-2020</td>
                      <td className="text-center">25-03-2020</td>
                      <td className="text-center">Approved</td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">Pending</td>
                    </tr>
                    <tr>
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">Pending</td>
                    </tr>
                    <tr className="text-center">
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">--/--/--</td>
                      <td className="text-center">Pending</td>
                    </tr>
                </table>
            </div>
            <br/>
            <br/>
            <br/>
<div className="text-center">
<button type="button" class="btn btn-success" onClick={()=>{this.WFH()}}>WFH-Request</button>
</div>
            </Form>
        );
    }
}
export default Workfrom;