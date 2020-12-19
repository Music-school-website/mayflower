import React from "react";
//import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import "../index.css";
import $ from 'jquery';
import "./loader.js"
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {SwitchLang} from "../component/switch-lang";


class PageHeaderReact extends React.Component{
    static propTypes = {
        // self
        // React Redux
        language: PropTypes.string.isRequired,
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
        // text = i18n(this.props.language).page.pageHeader
    }
    componentDidMount() {
        $( '.hamburger-menu' ).on( 'click', function() {
            $(this).toggleClass('open');
            $('.site-navigation').toggleClass('show');
        });
    }
    // handleToggle = () => {
    //
    // };
    selected = (status,text) =>{
        switch(status){
            case 1:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li className="current-menu-item" onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                    <li onClick={() => {this.props.history.push('/foundation');}}><a >{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >{text.contact}</a></li>
                </ul>
            case 2:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}} className="current-menu-item"><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                    <li onClick={() => {this.props.history.push('/foundation');}}><a >{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >{text.contact}</a></li>
                </ul>
            case 3:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a>{text.honor}</a></li>
                    <li onClick={() => {this.props.history.push('/foundation');}}><a>{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a>{text.contact}</a></li>
                </ul>
            case 4:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}} className="current-menu-item"><a >{text.honor}</a></li>
                    <li onClick={() => {this.props.history.push('/foundation');}}><a >{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >{text.contact}</a></li>
                </ul>
            case 5:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                    <li className="current-menu-item"onClick={() => {this.props.history.push('/foundation');}}><a >{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}}><a >{text.contact}</a></li>
                </ul>
            case 6:
                return  <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                    <li onClick={() => {this.props.history.push('/introduction');}}><a >{text.introduction}</a></li>
                    <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                    <li onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                    <li onClick={() => {this.props.history.push('/foundation');}}><a >{text.foundation}</a></li>
                    <li onClick={() => {this.props.history.push('/contact');}} className="current-menu-item"><a >{text.contact}</a></li>
                </ul>
        }



    }
    render() {
        const text = i18n(this.props.language).page.pageHeader
        //console.log(text)
        return (
            <div>
                <SwitchLang/>
                <div className="about-page">
                    <div className="page-header">
                        <header className="site-header">
                            <header className="site-header">
                                {/* .top-header-bar */}
                                <div className="nav-bar">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-9 col-lg-3">
                                                <div className="site-branding">
                                                    <h1 className="site-title pointer" onClick={() => {this.props.history.push('/home');}}><a>May<span>flower</span></a></h1>
                                                </div>
                                            </div>
                                            {/* .col */}
                                            <div
                                                className="col-3 col-lg-9 flex align-content-center">
                                                <nav className="site-navigation flex justify-content-end align-items-center">
                                                    {this.selected(this.props.status, text)}
                                                    <div className="hamburger-menu d-lg-none">
                                                        <span/>
                                                        <span/>
                                                        <span/>
                                                        <span/>
                                                    </div>
                                                </nav>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </header>
                        </header>
                    </div>

                </div>
            </div>
        )
    }
}

export const PageHeader = withRouter(
    connect(
        (state) =>{
            return{
                language: state.language
            };
        },
    )(PageHeaderReact)
);

//export const PageHeader = withRouter(PageHeaderReact)