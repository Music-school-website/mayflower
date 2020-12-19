import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../page-header";
//import {Footer} from "../footer";
//import {PageHeader} from "../page-header";
//import {Footer} from "../footer";
import about from "../images/intro.png"
import side from "../images/side.png"
//import user from "../images/user-1.jpg"
class IntroReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
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
                            <div className="col-12">
                                <div className="breadcrumbs">
                                    <ul className="flex flex-wrap align-items-center p-0 m-0">
                                        <li><a><i className="fa fa-home"/> Home</a></li>
                                        <li>Introduction</li>
                                    </ul>
                                </div>{/* .breadcrumbs */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                        <div className="row">
                            <div className="col-12">
                                <div className="about-heading">
                                    <h2 className="entry-title">Welcome to Mayflower Art Center</h2>
                                    <p>The Sino-American Mayflower Art Center ( hereafter, “the Art Center”) is located at Howard county in Maryland. Mr. Yiming Wu, the founder of the Arts Center, he is a excellent professional composer from China.</p>
                                </div>{/* .about-heading */}
                            </div>{/* .col */}
                            <div className="col-12 col-lg-12">
                                <div className="about-stories">
                                    <h3>Our Stories</h3>
                                    <p>In 2017, Mr.Wu and his family immigrated to Maryland, USA, then founded the Art Center. He has developed a unique teaching method for composition and actively cultivates creative composers for the local.</p>
                                    <p>
                                        Mr. Yiming Wu has been proposing the idea of “achieving professional level with spare-time learning.” Through the meticulous guidance of Mr. Yiming Wu and the hard work of the students, from 2019 to December 2020, 21 students of the Art Center have won prizes from 64 important composition competitions.
                                    </p>
                                    <p>
                                        Some competitions are the top professional competition(such as: JSFest Composition Competition). Some composition competition are professional competition without age limit. The winners include professional composers, undergraduate/master/Ph.D. students in composition, even professors from Central Conservatory of Music. In comparison, the winners from the Arts Center are students in elementary, middle or high school (ages between 9and 17). They learn composition with their spare time after school. Some of them have only learned composition for a few months! In some of these competitions, the number of award winners from the Arts Center surpassed the number from other music schools.
                                    </p>
                                    <p>
                                        “Winning awards is not the goal,” Mr. Wu said, “but a way to strengthen students’ self-confidence, expand their horizon, and stimulate their creativity so that they are more prepared for their double major studies in Ivy League schools.” After winning several top-tier national and international composition competitions, Max Lu, a student from the Arts Center, has been accepted by Columbia University this year.
                                    </p>
                                    <p>
                                        In the past two years，the student body of the Arts Center keeps growing! We have more than 30 students from Maryland. Recently, new students from Virginia, Washington D.C., New York, Texas, Singapore and China are also joining us.
                                    </p>
                                    <p>
                                        the Arts Center established an online school in September this year, invited 2 excellent new teachers, and added Music Theory and Western Music History courses.
                                        In the future, we plan to invite new teachers so that our curricula and training can be more systematic, diversified, and scientific. Just like our name, Mayflower, the Arts Center will keep helping more rising stars to prepare for the adventures of their life and career!

                                    </p>



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
export const Intro = withRouter(IntroReact)