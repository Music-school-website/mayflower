import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import "../icon/themify-icons.css"
import PropTypes from "prop-types";

class HeaderReact extends React.Component{
    static propTypes = {
        // self

        // React Router
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header className="site-header">
                    <div className="top-header-bar">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                                    <div className="header-bar-email d-flex align-items-center">
                                        <i className="fa fa-envelope" /><a>2019mayflowerartcenter@gmail.com</a>
                                    </div>{/* .header-bar-email */}
                                    {/*<div className="header-bar-text lg-flex align-items-center">*/}
                                    {/*    <p><i className="fa fa-phone" />123-456-7890 </p>*/}
                                    {/*</div>/!* .header-bar-text *!/*/}
                                </div>{/* .col */}
                                {/*<div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">*/}
                                {/*    <div className="header-bar-search">*/}
                                {/*        <form className="flex align-items-stretch">*/}
                                {/*            <input type="search" placeholder="What would you like to learn?" />*/}
                                {/*            <button type="submit" value className="flex justify-content-center align-items-center"><i className="fa fa-search" /></button>*/}
                                {/*        </form>*/}
                                {/*    </div>/!* .header-bar-search *!/*/}
                                {/*    <div className="header-bar-menu">*/}
                                {/*        <ul className="flex justify-content-center align-items-center py-2 pt-md-0">*/}
                                {/*            <li><a href="#">Register</a></li>*/}
                                {/*            <li><a href="#">Login</a></li>*/}
                                {/*        </ul>*/}
                                {/*    </div>/!* .header-bar-menu *!/*/}
                                {/*</div>/!* .col *!/*/}
                            </div>{/* .row */}
                        </div>{/* .container-fluid */}
                    </div>{/* .top-header-bar */}
                    <div className="nav-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-9 col-lg-3">
                                    <div className="site-branding">
                                        <h1 className="site-title pointer" onClick={() => {this.props.history.push('/home');}}><a>May<span>flower</span></a></h1>
                                    </div>{/* .site-branding */}
                                </div>{/* .col */}
                                <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
                                    <nav className="site-navigation flex justify-content-end align-items-center">
                                        <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                                            <li ><a>Home</a></li>
                                            <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                                            <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                                            <li onClick={() => {this.props.history.push('/honor');}}><a >Honors</a></li>
                                            <li onClick={() => {this.props.history.push('/contact');}}><a >Contact</a></li>
                                        </ul>
                                        <div className="hamburger-menu d-lg-none">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>{/* .hamburger-menu */}
                                        <div className="header-bar-cart">
                                            <a href="#" className="flex justify-content-center align-items-center"><span aria-hidden="true" className="icon_bag_alt" /></a>
                                        </div>{/* .header-bar-search */}
                                    </nav>{/* .site-navigation */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </div>{/* .nav-bar */}
                </header>{/* .site-header */}
            </div>

        )
    }
}
export const Header = withRouter(HeaderReact)