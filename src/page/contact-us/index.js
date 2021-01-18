import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import contact from "../images/contact.png";
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import PropTypes from "prop-types";
//import {Footer} from "../footer";


class ContactReact extends React.Component{
    static propTypes = {
        // self
        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const text = i18n(this.props.language).page.contact
        return (
            <div>
                <PageHeader status = {6}/>
                <div style={{position:'fixed',top:'80px', left:'40%', right:"30%",zIndex:'-9999',opacity:'0.4',
                    filter:'alpha(opacity=40)'}}>
                    <img
                        src={contact}
                        // style={{width:'900px', height:'900px'}}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <Breadcrumbs breadcrumbs={text.breadcrumb}/>
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
                                    <li><span>Location:</span>Maryland, US</li>
                                    <li><span>Email:</span><a href="#">2019mayflowerartcenter@gmail.com</a></li>
                                </ul>
                            </div>{/* .contact-info */}
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}

            </div>

        )
    }
}
export const Contact = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(ContactReact)
)
//export const Contact = withRouter(ContactReact)