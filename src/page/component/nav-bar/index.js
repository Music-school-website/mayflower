import React from "react";
import {withRouter} from 'react-router-dom'
import "../../index.css"
import "../../icon/themify-icons.css"
import PropTypes from "prop-types";
import "./loader.js"
import $ from "jquery";
import {i18n} from "../../../i18n";
import {connect} from "react-redux";
import {SwitchLang} from "../switch-lang";
import logo from '../../images/LOGO2.png'

class HeaderReact extends React.Component{
    static propTypes = {
        // self

        // React Redux
        language: PropTypes.string.isRequired,
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
    componentDidMount() {
        $( '.hamburger-menu' ).on( 'click', function() {
            $(this).toggleClass('open');
            $('.site-navigation').toggleClass('show');
        });
    }
    render() {
        const text = i18n(this.props.language).page.pageHeader
        return (
            <div>
                <SwitchLang/>
                <header className="site-header">
                    <div className="nav-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-9 col-lg-3">
                                    <div className="site-branding">
                                        <div>
                                            <h1 className="site-title pointer" onClick={() => {this.props.history.push('/home');}}>
                                                <span>
                                                    <img
                                                        src={logo}
                                                        style={{width:'35px', height:'41px', marginTop:'-15px', marginRight:'10px'}}
                                                    />
                                                </span>
                                                <a>May<span>flower</span></a>
                                            </h1>
                                        </div>

                                    </div>{/* .site-branding */}
                                </div>{/* .col */}
                                <div className="col-3 col-lg-9 flex align-content-center">
                                    <nav className="site-navigation flex justify-content-end align-items-center">
                                        <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center pointer">
                                            <li onClick={() => {this.props.history.push('/introduction');}}><a>{text.introduction}</a></li>
                                            <li onClick={() => {this.props.history.push('/course');}}><a >{text.course}</a></li>
                                            <li onClick={() => {this.props.history.push('/honor');}}><a >{text.honor}</a></li>
                                            <li onClick={() => {this.props.history.push('/foundation');}}><a>{text.foundation}</a></li>
                                            <li onClick={() => {this.props.history.push('/contact');}}><a >{text.contact}</a></li>
                                        </ul>
                                        <div className="hamburger-menu d-lg-none">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>{/* .hamburger-menu */}
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
export const Header = withRouter(
    connect(
        (state) =>{
            return{
                language: state.language
            };
        },
    )(HeaderReact)
)