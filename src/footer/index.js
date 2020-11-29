import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"

class FooterReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <hr/>
                <footer className="site-footer">
                    <div className="footer-widgets">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="foot-about">
                                        <h2>Mayflower</h2>
                                        <p>The Mayflower art center provides students with courses on Composition, Music Theory, and Western Music History.  </p>
                                        <p className="footer-copyright">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright © All rights reserved
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                                    </div>{/* .foot-about */}
                                </div>{/* .col */}
                                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                                    <div className="foot-contact">
                                        <h2>Contact Us</h2>
                                        <ul>
                                            <li>Email: 2019mayflowerartcenter@gmail.com</li>
                                            {/*<li>Phone: 123-456-7890</li>*/}
                                            <li>Address: United States</li>
                                        </ul>
                                    </div>{/* .foot-contact */}
                                </div>{/* .col */}
                                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
                                    <div className="quick-links flex flex-wrap">
                                        <h2 className="w-100">Quick Links</h2>
                                        <ul className="w-50">
                                            <li><a href="#">About </a></li>
                                            <li><a href="#">Terms of Use </a></li>
                                            <li><a href="#">Privacy Policy </a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                        <ul className="w-50">
                                            <li><a href="#">Documentation</a></li>
                                            <li><a href="#">Forums</a></li>
                                            <li><a href="#">Language Packs</a></li>
                                            <li><a href="#">Release Status</a></li>
                                        </ul>
                                    </div>{/* .quick-links */}
                                </div>{/* .col */}
                                {/*<div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">*/}
                                {/*    <div className="follow-us">*/}
                                {/*        <h2>Follow Us</h2>*/}
                                {/*        <ul className="follow-us flex flex-wrap align-items-center">*/}
                                {/*            <li><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                                {/*            <li><a href="#"><i className="fa fa-google-plus" /></a></li>*/}
                                {/*            <li><a href="#"><i className="fa fa-instagram" /></a></li>*/}
                                {/*            <li><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                                {/*        </ul>*/}
                                {/*    </div>/!* .quick-links *!/*/}
                                {/*</div>/!* .col *!/*/}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </div>{/* .footer-widgets */}
                    <div className="footer-bar">
                        <div className="container">
                            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-center">
                                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                                    <div className="footer-bar-nav">
                                        <ul className="flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                                            <li><a href="#">Mayflower</a></li>
                                            <li><a href="#">Terms of Use</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>{/* .footer-bar-nav */}
                                </div>{/* .col-12 */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </div>{/* .footer-bar */}
                </footer>
            </div>

        )
    }
}
export const Footer = withRouter(FooterReact)