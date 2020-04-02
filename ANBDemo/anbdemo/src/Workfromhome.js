import React,{Component} from 'react';
import {Button,FormGroup,Form} from 'reactstrap';
import Anblicks from './Anblicks.png';
import './App.css';
import {Link} from 'react-router-dom';
import {Workfrom} from './Workfrom';

class Workfromhome extends  Component{
    render(){
        return(
            <Form className="Request-Form">
                <div class="header">
                    <img src={Anblicks} alt="A Anblicks"></img>
                 <div class="header-right">
                   <a class="active" href="">mallesh.n</a>
                   <a href="/login">Logout</a>
                 </div>
                </div>
            <div>
                <section>
                    <nav>
                      <ul class="icon-bar">
                        <li><Link to="/Workfromhome">Home</Link></li>
                        <li><Link to="/Workfrom">Workfromhome</Link></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href=""></a></li>
                      </ul>
                    </nav>
                    <br/>
                    <br/>
                    <article>
                      <h1>Anblicks</h1>
                      <br/>
                      <p>Since 2004, Anblicks has been enabling customers across the globe, with their digital transformation journey. We specialize in delivering Big</p>
                      <p>Four consulting experience across different industries.
                          Anblicks employs more than 400 technology professionals and over 100 data analysts and data science experts. </p>
                    </article>
                </section>
            </div>

            </Form>
        );
    }
}
export default Workfromhome;