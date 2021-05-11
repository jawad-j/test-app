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
export default class Footer extends Component {
    
    
    render() {
        return (




<footer className="text-center text-white">
                    <div className="fix">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h4>TAGS:</h4>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Entertainment</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">History</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">International Affairs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5>CONTACT'S:</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">+923327491970</a>
                                    </li>
                                    <li>
                                        <a href="jawad@ventechstudio.com" className="text-white">jawad@ventechstudio.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="subscribe">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12 mb-4 mb-md-0">
                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" />
                                        <label className="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
            </button>
                                </div>
                            </div>
                        </form>
                    </section>


                    <div class="text-center p-3">
                        © 2021 Copyright:
    <a class="text-white">jawad@ventechstudio.com</a>
    </div>
                    </div>
                </footer>)}}