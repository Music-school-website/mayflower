import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import foundation from "../images/found.png"
import PropTypes from "prop-types";

class FoundReact extends React.Component{
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
                                        <h5 className="entry-title">Mayflower Art Foundation</h5>
                                      <p>
                                          Mayflower Art Foundation is a 501(c)(3) non-profit organization founded by Mayflower Art Center. The Foundation aims to foster the growth of youths in music and promote cultural enrichment by organizing showcase and cultural exchange concerts, seminars with masters in the fields, and providing scholarships and financial awards to outstanding students of the Mayflower Art Center.
                                      </p>
                                        <p>
                                            Showcase concerts for Mayflower Art Center students feature pieces performed by professional musicians and written by students that have won awards in national and international composition competitions. Students gain opportunities to face the audiences and enrich their resumes with the practical experiences.
                                        </p>
                                        <p>
                                            Mayflower Art Foundation invites prominent young composers in the world to compose and hosts concerts to debut their works in US. These premier shows provide rich immersions in music and culture that enhance exploration in composition innovations and advance prosperity of music in the world.
                                        </p>
                                        <p>
                                            Seminars with masters offer opportunities to Mayflower Art Center students and the general public to hear from preeminent composers and musicians. Accomplished musicians share their music appreciation, composition techniques, and performance experiences that elevate students’ visions and inspire the community.
                                        </p>
                                        <p>
                                            The Foundation provides scholarships and financial awards funded by Mayflower Art Center, parents and the general public to students outstanding in music composition.
                                        </p>
                                    </header>{/* .heading */}
                                    <div className="entry-content ezuca-stats">
                                        <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                                            <div className="stats-count">
                                                <span>Join us</span>
                                                <p>STUDENTS LEARNING</p>
                                            </div>{/* .stats-count */}
                                            <div className="stats-count">
                                                <span>International</span>
                                                <p>ACTIVE COURSES</p>
                                            </div>{/* .stats-count */}
                                        </div>{/* .stats-wrap */}
                                    </div>{/* .MusicSchool-stats */}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-4 flex align-content-center mt-5 mt-lg-0">
                                    <div className="ezuca-video position-relative">
                                        <img src={foundation} alt="" style={{height:'800px', width:'auto'}}/>
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