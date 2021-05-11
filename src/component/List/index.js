import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./style.css";
import { Link } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer';
export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: '',
            tags: '',
            data: [],
            jsonRes: false
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:3001/entry").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            this.setState({ data: jsonRes })
            console.log("data", jsonRes)
        }

        );

    }
    render() {
        const { data } = this.state
        return (
            <>
                <NavBar />
                <div className="listing">
                    {/* <section className="container">
                        <div className="site-content">
                        <div className="post-content">
                            <div className="post-image">
                                <div>
                                    <img src="yoga.jpg" className="img"></img>
                                </div>
                                <div className="post-title">
                                    <a href="#">Why should boy have fun? when women make india Alcohol loving country.</a>
                                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec commodo neque, et laoreet mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed convallis tristique turpis, nec varius erat consectetur sit amet. Nunc semper dictum urna tincidunt auctor. Vivamus aliquam sodales elit, eget pellentesque mi dignissim a. Nullam tincidunt odio nec risus finibus suscipit. Phasellus commodo, ex id pharetra pellentesque, purus elit pretium sapien, non posuere urna dui sit amet lorem. Proin ligula ante, tristique ultricies condimentum vel, tincidunt quis urna. Vestibulum posuere purus gravida posuere dictum. Proin viverra consequat enim quis ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed dignissim est quam, non vestibulum quam venenatis id. Suspendisse urna tortor, blandit ut elit eget, imperdiet venenatis felis. Nam et ligula scelerisque sem maximus lacinia.</p>
                                    <button className="btn post-btn">Read More...</button>
                                </div>

                            </div>
                            <hr></hr>
                        </div>
                        <aside className="sidebar">
                            <h1>SideBar</h1>
                        </aside>

                        </div>
                    </section> */}





                    {data.map((d, index) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <a className="pstn">{d.tags}</a>
                                                    <td className="w-25">
                                                        <Link
                                                            to={{
                                                                pathname: `/details/${d._id}`,
                                                                query: { id: d.title },
                                                            }}
                                                        >
                                                            <img className="img-fluid img-thumbnail" src={d.image} alt="blog" />
                                                            <figcaption className="txt">{d.title}</figcaption>
                                                        </Link>
                                                    </td>
                                                    <td className="container">{d.content}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="foot">
                <Footer/>
                </div>
            </>
        )
    }
}
