import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./style.css";
import axios from 'axios';
import Footer from '../Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from '../NavBar';
export default class test extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            image:'',
            tags:''
        }
    }
    handleTags=(t)=>{
        this.setState({tags: t.target.value})
    }
    handleTitle=(e)=>{
        this.setState({title: e.target.value})
        console.log("title", this.title)
    };
    handleContent=(c)=>{
        this.setState({content: c.target.value})
        console.log("content",this.content)
    };
    handleImage=(p)=>{
     const image=p.target.files[0];
        console.log("image",this.image)
    const reader = new FileReader();
    reader.readAsDataURL(image)
    reader.onload = () => this.setState({ image: reader.result })
    };
    handleSubmit (s) {
        s.preventDefault();
        const newBlog = {
          title: this.state.title,
          content: this.state.content,
          image: this.state.image,
          tags: this.state.tags
        }
        console.log(newBlog)
        console.log(this.state.image)
        axios.post('http://localhost:3001/testing', newBlog)
      }

    render() {
        return (
            <>
            <NavBar/>
            
               <div className="header">
                    <h1>Create Blog</h1>
                    <h3>Enter Details</h3>
                </div>
                <div className="ctr">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="usr">Title</label>
                                <input type="text" className="form-control"  onChange={(e)=>this.handleTitle(e)}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="deprt">Content:</label>
                                <input type="text" className="form-control"  onChange={(c)=>this.handleContent(c)}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="usr">Tags:</label>
                                <select className="form-control" onChange={(t)=>this.handleTags(t)}>
                                    <option value="History">History</option>
                                    <option value="Entertainments">Entertainments</option>
                                    <option value="International Affairs">International Affairs</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="usr">Upload Image:</label>
                                <input type="file" className="form-control" onChange={(p)=>this.handleImage(p)} ></input>
                            </div>
                        </form>

                        <div className="btn">
                            <button type="submit" className="btn btn-primary" onClick={(s)=>this.handleSubmit(s)}>Create</button>
                        </div>
                    </div>
                </div>
                <div className="foot">
                <Footer/>
                </div>


            </>
        )
    }
}
