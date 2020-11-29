import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../page-header";
//import {Footer} from "../footer";


class ContactReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <PageHeader status = {6}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumbs">
                                <ul className="flex flex-wrap align-items-center p-0 m-0">
                                    <li><a href="#"><i className="fa fa-home" /> Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>{/* .breadcrumbs */}
                        </div>{/* .col */}
                    </div>{/* .row */}
                    <div className="row justify-content-between">
                        {/*<div class="col-12">*/}
                        {/*<div class="contact-gmap">*/}
                        {/*<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyCkIjViJ_7vt5PMIHai_NjcdR64QYycw&q=Space+Needle,Seattle+WA" allowfullscreen></iframe>*/}
                        {/*</div>&lt;!&ndash; .contact-gmap &ndash;&gt;*/}
                        {/*</div>&lt;!&ndash; .col &ndash;&gt;*/}

                        <div className="col-12 offset-lg-3 col-lg-6">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                {/*<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. </p>*/}
                                <ul className="p-0 m-0">
                                    <li><span>Location:</span>10396 Tuscany Rd Ellicott City MD, 21042</li>
                                    <li><span>Email:</span><a href="#">2019mayflowerartcenter@gmail.com</a></li>
                                    <li><span>Phone:</span><a href="#">(410) 402-0521</a></li>
                                </ul>
                            </div>{/* .contact-info */}
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}

            </div>

        )
    }
}
export const Contact = withRouter(ContactReact)