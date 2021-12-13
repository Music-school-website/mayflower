import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import PropTypes from "prop-types";

class FoundReact extends React.Component{
    static propTypes = {
        // self
        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
        history: PropTypes.object.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const text = i18n(this.props.language).page.foundation
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
                                <div className="col-12 col-lg-8 align-content-lg-stretch">
                                    <header className="heading">
                                        <div
                                            className="content mt-5"
                                            dangerouslySetInnerHTML={{ __html: text.content}}
                                        />
                                    </header>{/* .heading */}
                                    <div className="entry-content ezuca-stats">
                                        <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                                            <div className="stats-count" onClick={() => {this.props.history.push('/contact');}}>
                                                <span>Join us</span>
                                                <p>STUDENTS LEARNING</p>
                                            </div>{/* .stats-count */}
                                            <div className="stats-count" onClick={() => {this.props.history.push('/course');}}>
                                                <span>International</span>
                                                <p>ACTIVE COURSES</p>
                                            </div>{/* .stats-count */}
                                        </div>{/* .stats-wrap */}
                                    </div>{/* .MusicSchool-stats */}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-4 flex align-content-center mt-5 mt-lg-0">
                                    <div className="ezuca-video position-relative">
                                        <img src='https://mayflower.s3.amazonaws.com/new3.png' alt="" style={{height:'800px', width:'auto'}}/>
                                    </div>{/* .MusicSchool-video */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </section>{/* .about-section */}
                </div>
            </div>


        )
    }
}
export const Found = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(FoundReact)
)
//export const Found = withRouter(FoundReact)