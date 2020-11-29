import React from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import "../index.css"

class PageHeaderReact extends React.Component{
    static propTypes = {
        // self

        // React Router
        status: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    selected = (status) =>{
        switch(status){
            case 1:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li><a>Home</a></li>
                    <li className="current-menu-item" onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >Honors</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >Contact</a></li>
                </ul>
            case 2:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li><a>Home</a></li>
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}} className="current-menu-item"><a >Courses</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >Honors</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >Contact</a></li>
                </ul>
            case 3:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li><a>Home</a></li>
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                    {/*<li onClick={() => {this.props.history.push('/');}}className="current-menu-item"><a >News</a></li>*/}
                    <li><a >Honors</a></li>
                    <li><a >Events</a></li>
                    <li><a >Contact</a></li>
                </ul>
            case 4:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li ><a>Home</a></li>
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}} className="current-menu-item"><a >Honors</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >Contact</a></li>
                </ul>
            case 5:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li ><a>Home</a></li>
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >Honors</a></li>
                    <li className="current-menu-item"><a >Events</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >Contact</a></li>
                </ul>
            case 6:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li><a>Home</a></li>
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >Introduction</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >Courses</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >Honors</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}} className="current-menu-item"><a >Contact</a></li>
                </ul>
        }



    }
    render() {
        return (
            <div>
                <div className="about-page">
                    <div className="page-header">
                        <header className="site-header">
                            <header className="site-header">
                                <div className="top-header-bar">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div
                                                className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                                                <div className="header-bar-email d-flex align-items-center">
                                                    <i className="fa fa-envelope"/><a>2019mayflowerartcenter@gmail.com</a>
                                                </div>
                                                {/* .header-bar-email */}
                                            </div>
                                            {/* .col */}
                                        </div>
                                        {/* .row */}
                                    </div>
                                    {/* .container-fluid */}
                                </div>
                                {/* .top-header-bar */}
                                <div className="nav-bar">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-9 col-lg-3">
                                                <div className="site-branding">
                                                    <h1 onClick={() => {this.props.history.push('/home');}} className="site-title pointer"><a>May<span>flower</span></a></h1>
                                                </div>
                                                {/* .site-branding */}
                                            </div>
                                            {/* .col */}
                                            <div
                                                className="col-3 col-lg-9 flex justify-content-end align-content-center">
                                                <nav
                                                    className="site-navigation flex justify-content-end align-items-center">
                                                    {this.selected(this.props.status)}
                                                    <div className="hamburger-menu d-lg-none">
                                                        <span/>
                                                        <span/>
                                                        <span/>
                                                        <span/>
                                                    </div>
                                                    {/* .hamburger-menu */}
                                                    <div className="header-bar-cart">
                                                        <a href="#"
                                                           className="flex justify-content-center align-items-center"><span
                                                            aria-hidden="true" className="icon_bag_alt"/></a>
                                                    </div>
                                                    {/* .header-bar-search */}
                                                </nav>
                                                {/* .site-navigation */}
                                            </div>
                                            {/* .col */}
                                        </div>
                                        {/* .row */}
                                    </div>
                                    {/* .container */}
                                </div>
                                {/* .nav-bar */}
                            </header>
                            {/* .site-header */}
                        </header>
                        {/* .site-header */}
                        <div className="page-header-overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <header className="entry-header">
                                            <h1>ABOUT</h1>
                                        </header>
                                        {/* .entry-header */}
                                    </div>
                                    {/* .col */}
                                </div>
                                {/* .row */}
                            </div>
                            {/* .container */}
                        </div>
                        {/* .page-header-overlay */}
                    </div>
                    {/* .page-header */}
                </div>
            </div>


        )
    }
}
// PageHeaderReact.propType = {
//     status: PropTypes.number.isRequired,
//     match: PropTypes.object.isRequired,
//     history: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
export const PageHeader = withRouter(PageHeaderReact)