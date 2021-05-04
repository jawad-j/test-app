import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./style.css"
export default class list extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#history">History</Nav.Link>
                        <Nav.Link href="#entertainment">Entertainment</Nav.Link>
                        <Nav.Link href="#international affairs">International Affairs</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar>
    <h1 class="hdr">Blog's</h1>
    <div className="container">
    <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <figure><a className="pstn" href="">TAGS</a>
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <figcaption>Many times, readers will get distracted</figcaption>
    </figure>
    <figure><a className="pstn" href="">TAGS</a>
    <img
      src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <figcaption>Many times, readers will get distracted</figcaption>
    </figure>
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
  <figure><a className="pstn" href="">TAGS</a>
      <img
      src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <figcaption>Many times, readers will get distracted</figcaption></figure>
<figure><a className="pstn" href="">TAGS</a>
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /><figcaption>Many times, readers will get distracted</figcaption></figure>
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
   <figure><a className="pstn" href="">TAGS</a>
    <img
      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /><figcaption>Many times, readers will get distracted</figcaption></figure>
<figure><a className="pstn" href="">TAGS</a>
    <img
      src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /><figcaption>Many times, readers will get distracted</figcaption></figure>
  </div>
</div>






{/* <div className="row">
 <div className="col-lg-4 col-md-12 mb-4">
<figure>
  <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" class="img-fluid mb-4" alt=""/>
  <figcaption>Hey</figcaption>
  </figure>
</div>
<div className="col-lg-4 col-md-6 mb-4">
<figure>
  <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" class="img-fluid mb-4" alt=""/>
  <figcaption>Hey</figcaption>
  </figure>
<figure>
  <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" class="img-fluid mb-4" alt=""/>
  <figcaption>Hey</figcaption>
  </figure>
</div>
  </div> */}
  </div>
<div>
                <footer className="bg-dark text-center text-white">
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
                </footer>

</div>

            </>
        )
    }
}
