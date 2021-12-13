import React from "react";
//import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types";
import "../../index.css";
import $ from 'jquery';
import "./loader.js"
import {i18n} from "../../../i18n";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {SwitchLang} from "../switch-lang";




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
                                                    <div className="flex">
                                                        <div className="site-title pointer flex" onClick={() => {this.props.history.push('/home');}}>
                                                            <div>
                                                                <img
                                                                    src="https://mayflower.s3.amazonaws.com/logo2.png"
                                                                    style={{width:'50px', height:'50px', marginTop:'-15px'}}
                                                                />
                                                            </div>
                                                            <div className="text-gradient"><a>Mayflower</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* .col */}
                                            <div
                                                className="col-3 col-lg-9 flex align-content-center">
                                                <nav className="site-navigation flex justify-content-end align-items-center">
                                                    <ul>
                                                        <ol>
                                                            <li className="menu-item" onClick={() => {this.props.history.push('/introduction');}}><a>{text.introduction}</a></li>
                                                            <li  className="menu-item" aria-haspopup="true">
                                                                <a >{text.program}</a>
                                                                <ol className="sub-menu" aria-label="submenu">
                                                                    <li className="menu-item" onClick={() => {this.props.history.push('/course');}}><a>{text.course}</a></li>
                                                                    <li className="menu-item" onClick={() => {this.props.history.push('/music-production');}}><a>{text.musicProduction}</a></li>
                                                                    <li className="menu-item" onClick={() => {this.props.history.push('/oversea');}}><a >{text.oversea}</a></li>
                                                                </ol>
                                                            </li>
                                                            <li className="menu-item" onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                                                            <li className="menu-item" onClick={() => {this.props.history.push('/news');}}><a>{text.news}</a></li>
                                                            <li className="menu-item" onClick={() => {this.props.history.push('/foundation'); }} ><a>{text.foundation}</a></li>
                                                            <li className="menu-item" onClick={() => {this.props.history.push('/contact');}} ><a>{text.contact}</a></li>
                                                        </ol>
                                                    </ul>
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