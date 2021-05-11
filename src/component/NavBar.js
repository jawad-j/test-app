


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
//import "./style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class NavBar extends Component {
    
    
    render() {
        return (
<nav className="navbar fixed-top navbar-light  clr">
<Nav className="mr-auto">
                        <Nav.Link href="#home"><Link className="text-white" to="/list">Home</Link></Nav.Link>
                        <Nav.Link href="#history"><Link className="text-white" to="/list" href="history">History</Link></Nav.Link>
                        <Nav.Link href="#entertainment"><Link className="text-white" to="/list">Entertainment</Link></Nav.Link>
                        <Nav.Link href="#international affairs"><Link className="text-white" to="/list">International Affairs</Link></Nav.Link>
                        <Nav.Link href="#about" className="text-white">About</Nav.Link>
                        <Nav.Link href="#contacts"className="text-white">Contacts</Nav.Link>
                    </Nav>
                    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>)}}