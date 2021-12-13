import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import PropTypes from "prop-types";

class OverseaReact extends React.Component{
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
        const text = i18n(this.props.language).page.oversea
        return (
            <div>
                <div className="about-page">
                    <PageHeader status = {5}/>
                    <div className="container">
                        <div className="row">
                            <Breadcrumbs breadcrumbs={text.breadcrumb}/>
                        </div>{/* .row */}
                    </div>{/* .container */}
                    <section className="about-section" style={{marginTop:'-50px'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 align-content-lg-stretch">
                                    <header className="heading">
                                        <div
                                            className="content mt-5"
                                            dangerouslySetInnerHTML={{ __html: text.content}}
                                        />
                                    </header>{/* .heading */}

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6" style={{marginTop:'150px'}}>
                                    <div className="contact-info">
                                        <h3>Contact Information</h3>

                                        <ul className="p-0 m-0">
                                            <li><span>Location:</span>Maryland, US</li>
                                            <li><span>Email:</span><a href="#">2019mayflowerartcenter@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>{/* .col */}
                                <div className="col-12 col-lg-6" >
                                    <div className="contact-info">

                                                <img src='https://mayflower.s3.amazonaws.com/code.jpg' style={{width:'400px'}}/>

                                    </div>
                                </div>{/* .col */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        )
    }
}
export const Oversea = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(OverseaReact)
)
//export const Found = withRouter(FoundReact)