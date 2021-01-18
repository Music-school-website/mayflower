import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
//import {Footer} from "../footer";
//import {PageHeader} from "../page-header";
//import {Footer} from "../footer";
import about from "../images/intro.png"
import side from "../images/side.png"
import PropTypes from "prop-types";

//import user from "../images/user-1.jpg"
class IntroReact extends React.Component{
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
        const text = i18n(this.props.language).page.introduction
        return (
            <div>
                <div className="about-page">
                    <PageHeader status = {1}/>
                    <div style={{position:'fixed',top:'120px', right:'200px',zIndex:'-9999',opacity:'0.4',
                        filter:'alpha(opacity=40)',width:'400px', height:'auto'}}>
                        <img src={side}/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <Breadcrumbs breadcrumbs={text.breadcrumb}/>
                        </div>{/* .row */}
                        <div className="row">
                            <div className="col-12">
                                <div className="about-heading">
                                    <h2 className="entry-title">Welcome to Mayflower Art Center</h2>
                                    <p>{text.summary}</p>
                                </div>{/* .about-heading */}
                            </div>{/* .col */}
                            <div className="col-12 col-lg-12">
                                <div className="about-stories">
                                    <h3>Our Stories</h3>
                                    {text.content}
                                    {/*<ul className="p-0 m-0 green-ticked">*/}
                                    {/*    <li>Learning program with after-school</li>*/}
                                    {/*    <li>Positive learning environment</li>*/}
                                    {/*    <li>Learning through play</li>*/}
                                    {/*</ul>/!* .green-ticked *!/*/}
                                </div>{/* .about-stories */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                    </div>{/* .container */}
                    <section className="about-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 align-content-lg-stretch">
                                    <header className="heading">
                                        <h2 className="entry-title">About Our School</h2>
                                       <p>
                                           The Mayflower art center provides students with courses on Composition, Music Theory, and Western Music History. These courses are the most professional in part-time music learning and college prep courses for most conservatories in the United States. (Instrumental performance courses will be gradually added as well in the future.)
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
                                            {/*<div className="stats-count">*/}
                                            {/*    340<span>M+</span>*/}
                                            {/*    <p>INSTRUCTORS ONLINE</p>*/}
                                            {/*</div>/!* .stats-count *!/*/}
                                            {/*<div className="stats-count">*/}
                                            {/*    20<span>+</span>*/}
                                            {/*    <p>Country Reached</p>*/}
                                            {/*</div>/!* .stats-count *!/*/}
                                        </div>{/* .stats-wrap */}
                                    </div>{/* .MusicSchool-stats */}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
                                    <div className="ezuca-video position-relative">
                                        <img src={about} alt="" style={{height:'500px', width:'auto'}}/>
                                    </div>{/* .MusicSchool-video */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </section>{/* .about-section */}
                    <section className="testimonial-section">
                        {/* Swiper */}
                        <div className="swiper-container testimonial-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-2 order-2 order-lg-1 flex align-items-center mt-5 mt-lg-0">
                                                {/*<figure className="user-avatar">*/}
                                                {/*    <img src={user} alt="" />*/}
                                                {/*</figure>/!* .user-avatar *!/*/}
                                            </div>{/* .col */}
                                            <div className="col-12 col-lg-10 order-1 order-lg-2 content-wrap h-100">
                                                <div className="entry-content">
                                                    <p>Achieving professional level with spare-time learning.</p>
                                                </div>{/* .entry-content */}
                                                <div className="entry-footer">
                                                    <h3 className="testimonial-user">Mr. Yiming Wu - <span>composer from China</span></h3>
                                                </div>{/* .entry-footer */}
                                            </div>{/* .col */}
                                        </div>{/* .row */}
                                    </div>{/* .container */}
                                </div>{/* .swiper-slide */}
                            </div>{/* .swiper-wrapper */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="swiper-pagination position-relative flex justify-content-center align-items-center" />
                                    </div>{/* .col */}
                                </div>{/* .row */}
                            </div>{/* .container */}
                        </div>{/* .testimonial-slider */}
                    </section>{/* .testimonial-section */}
                    {/*<div className="container">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12">*/}
                    {/*            <div className="team-heading">*/}
                    {/*                <h2 className="entry-title">Meet Our Team</h2>*/}
                    {/*                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>*/}
                    {/*            </div>/!* .team-heading *!/*/}
                    {/*        </div>/!* .col *!/*/}
                    {/*        <div className="col-12 col-md-6 col-lg-3">*/}
                    {/*            <div className="team-member">*/}
                    {/*                <img src="images/team-1.jpg" alt="" />*/}
                    {/*                <h3>Mr. John Wick</h3>*/}
                    {/*                <h4>Materials</h4>*/}
                    {/*                <ul className="p-0 m-0 d-flex justify-content-center align-items-center">*/}
                    {/*                    <li><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                    {/*                </ul>*/}
                    {/*            </div>/!* .team-member *!/*/}
                    {/*        </div>/!* .col *!/*/}
                    {/*        <div className="col-12 col-md-6 col-lg-3">*/}
                    {/*            <div className="team-member">*/}
                    {/*                <img src="images/team-2.jpg" alt="" />*/}
                    {/*                <h3>Michelle Golden</h3>*/}
                    {/*                <h4>WordPress</h4>*/}
                    {/*                <ul className="p-0 m-0 d-flex justify-content-center align-items-center">*/}
                    {/*                    <li><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                    {/*                </ul>*/}
                    {/*            </div>/!* .team-member *!/*/}
                    {/*        </div>/!* .col *!/*/}
                    {/*        <div className="col-12 col-md-6 col-lg-3">*/}
                    {/*            <div className="team-member">*/}
                    {/*                <img src="images/team-3.jpg" alt="" />*/}
                    {/*                <h3>Ms. Lucius</h3>*/}
                    {/*                <h4>Data Analysis</h4>*/}
                    {/*                <ul className="p-0 m-0 d-flex justify-content-center align-items-center">*/}
                    {/*                    <li><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                    {/*                </ul>*/}
                    {/*            </div>/!* .team-member *!/*/}
                    {/*        </div>/!* .col *!/*/}
                    {/*        <div className="col-12 col-md-6 col-lg-3">*/}
                    {/*            <div className="team-member">*/}
                    {/*                <img src="images/team-4.jpg" alt="" />*/}
                    {/*                <h3>Ms. Lara Croft </h3>*/}
                    {/*                <h4>HTML CSS</h4>*/}
                    {/*                <ul className="p-0 m-0 d-flex justify-content-center align-items-center">*/}
                    {/*                    <li><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>*/}
                    {/*                    <li><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                    {/*                </ul>*/}
                    {/*            </div>/!* .team-member *!/*/}
                    {/*        </div>/!* .col *!/*/}
                    {/*    </div>/!* .row *!/*/}
                    {/*</div>/!* .container *!/*/}

                </div>
            </div>


        )
    }
}
export const Intro = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(IntroReact)
)