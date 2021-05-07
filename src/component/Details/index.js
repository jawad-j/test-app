import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./style.css"
export default class details extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
    </div>  
    
    <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control"
        placeholder="Type query"
        aria-label="Search"
      />
      <button className="btn btn-outline-white text-white" type="button">Search</button>
    </form>
    </div>
</nav>

                <div>
                    <div className="row rw">
                        <div>
                            <figure><a className="pstn" href="">TAGS</a>
                                <img src="yoga.jpg" class="img-fluid mb-4" alt="" />
                            </figure>
                        </div>
                    </div>
                    <h2>Where can I get Lorem Ipsum?</h2>
                    <h6>Many variations of Lorem Ipsum exist today, and sometimes the text is altered to include humorous phrases.
                    If you’re going to be using Lorem Ipsum as filler text on your pages, you need to make sure that the passage doesn’t contain potentially embarrassing information.
                    Using our Lorem Ipsum generator, you can easily select a variation to build your desired number of Lorem Ipsum paragraphs, sentences, or words.
                    In addition, our generator can insert HTML markup, create HTML paragraphs, and make your text bold or italic. This makes it a great option for graphic designers and webmasters.
There really is no limit to where Lorem Ipsum should be used. It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial, heavy equipment seller - Lorem Ipsum ensures everything goes (and reads!) smoothly from design to implementation.</h6>
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
