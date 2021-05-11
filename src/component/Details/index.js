import React, { Component, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import "./style.css";
import Nav from 'react-bootstrap/Nav';
import Footer from '../Footer';
import NavBar from '../NavBar';
 function List() {
    const {id}=useParams();
    const [results,setResults]=useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = () => {
        fetch("http://localhost:3001/entry", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setResults(data);
            console.log("data",setResults)
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (

        <>
            <NavBar />
           
                {results.filter((f)=>f._id==id).map((b,index)=>{
            return(
                <div className="blog-post">
                <div className="blog-post_img">
                    <img src={b.image}></img>
                </div>
                <div className="blog-post_info">
                    <div className="blog-post_date">
                        <span>Sunday</span>
                        <span>24 May 2021</span>
                    </div>
                    <h1 className="blog-post_title"> Shark Sighting</h1>
                    <p className="blog-post_text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <a href="#" className="blog-post_cta">Author:
            <a> Jawad</a></a>
                </div>
            </div>
            )})}

                
            
            <div className="foot">
                <Footer /></div>


        </>
    )
}
export default List;






// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
// import "./style.css"
// export default class details extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             content: '',
//             image: '',
//             data: [],
//             jsonRes: false
//         }
//     }
//     componentDidMount = () => {
//         fetch("http://localhost:3001/entry").then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//         }).then(jsonRes => {
//             this.setState({ data: jsonRes })
//             console.log("data", jsonRes)
//         }

//         );

//     }


//     render() {
//         const {data}  = this.state
//         return (
//             <>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="container-fluid">
//                         <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-mdb-toggle="collapse"
//                             data-mdb-target="#navbarNav"
//                             aria-controls="navbarNav"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                         >
//                             <i className="fas fa-bars"></i>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Features</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Pricing</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
//                                     >Disabled</a
//                                     >
//                                 </li>
//                             </ul>
//                         </div>

//                         <form className="d-flex input-group w-auto">
//                             <input
//                                 type="search"
//                                 className="form-control"
//                                 placeholder="Type query"
//                                 aria-label="Search"
//                             />
//                             <button className="btn btn-outline-white text-white" type="button">Search</button>
//                         </form>
//                     </div>
//                 </nav>

// <div>
// {data.filter((data)=>data.id==id).map((b,index)=>{
//     return(
//         <div>
//             <h1>{b.title}</h1>
//             <p>{b.content}</p>
//         </div>
//     )
// })}

// </div>



//                 <div>
//                     <footer className="bg-dark text-center text-white fixed-bottom">
//                         <section className="section">
//                             <div className="row">
//                                 <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//                                     <h4>TAGS:</h4>

//                                     <ul className="list-unstyled mb-0">
//                                         <li>
//                                             <a href="#!" className="text-white">Entertainment</a>
//                                         </li>
//                                         <li>
//                                             <a href="#!" className="text-white">History</a>
//                                         </li>
//                                         <li>
//                                             <a href="#!" className="text-white">International Affairs</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
//                                     <h5>CONTACT'S:</h5>

//                                     <ul className="list-unstyled mb-0">
//                                         <li>
//                                             <a href="#!" className="text-white">+923327491970</a>
//                                         </li>
//                                         <li>
//                                             <a href="jawad@ventechstudio.com" className="text-white">jawad@ventechstudio.com</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </section>
//                         <section className="subscribe">
//                             <form action="">
//                                 <div className="row d-flex justify-content-center">
//                                     <div className="col-auto">
//                                         <p className="pt-2">
//                                             <strong>Sign up for our newsletter</strong>
//                                         </p>
//                                     </div>
//                                     <div className="col-md-5 col-12 mb-4 mb-md-0">
//                                         <div className="form-outline mb-4">
//                                             <input type="email" className="form-control" />
//                                             <label className="form-label" for="form5Example2">Email address</label>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto">
//                                         <button type="submit" className="btn btn-outline-light mb-4">
//                                             Subscribe
//             </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </section>


//                         <div class="text-center p-3">
//                             © 2021 Copyright:
//     <a class="text-white">jawad@ventechstudio.com</a>
//                         </div>
//                     </footer>

//                 </div>

//             </>
//         )
//     }
// }
