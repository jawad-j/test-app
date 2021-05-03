import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
export default class test extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">History</Nav.Link>
                        <Nav.Link href="#pricing">Entertainment</Nav.Link>
                        <Nav.Link href="#pricing">International Affairs</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contacts</Nav.Link>
                    </Nav>
                </Navbar>
                <h1>Create Blog</h1>
                <h3>Enter Details</h3>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="usr">Title:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="deprt">Content:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Tags:</label>
                            <select className="form-control">
                                <option value="History">History</option>
                                <option value="Entertainments">Entertainments</option>
                                <option value="International Affairs">International Affairs</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Upload Image:</label>
                            <input type="file" className="form-control"></input>
                        </div>
                    </form>

                    <div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>

                <footer className="bg-dark text-center text-white">
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Tags:</h5>

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
                                <h5 className="text-uppercase">Contact's:</h5>

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




                    <section className="">
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
                </footer>



            </>
        )
    }
}
