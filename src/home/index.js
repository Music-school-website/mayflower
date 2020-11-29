
import React from "react";
import {withRouter} from 'react-router-dom'
import {Header} from "../nav-bar";
import {Footer} from "../footer";
//import {CourseCard} from "../courses/course-card";
import "./index.css"
import "../icon/themify-icons.css"
import news5 from "../images/news5.png"
import news6 from "../images/news6.png"
import news7 from "../images/news7.png"
import imagesvideo from "../images/video-screenshot.png"
//import piano from "../images/piano-at-home.jpg";
import {CourseCard} from "../courses/course-card";
import PropTypes from "prop-types";


class HomeReact extends React.Component{
    static propTypes = {
        // self

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
    }
    render() {
        return (
            <div>
                <div className="hero-content">
                    <Header/>
                    <div className="hero-content-overlay">
                        <div className="hero-content-bgimg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
                                            <header className="entry-header">
                                                <h4>Welcome to the Sino-American Mayflower Art Center</h4>
                                                <h1>best music school</h1>
                                            </header>{/* .entry-header */}
                                            <div className="entry-content">
                                                <p>The Mayflower art center provides students with courses on Composition, Music Theory, and Western Music History. These courses are the most professional in part-time music learning and college prep courses for most conservatories in the United States. (Instrumental performance courses will be gradually added as well in the future.) </p>
                                            </div>{/* .entry-content */}
                                            {/*<footer className="entry-footer read-more pointer" >*/}
                                            {/*    <a onClick={() => {this.props.history.push('/introduction');}}>read more</a>*/}
                                            {/*</footer>/!* .entry-footer *!/*/}
                                        </div>{/* .hero-content-wrap */}
                                    </div>{/* .col */}
                                </div>{/* .row */}
                            </div>{/* .container */}
                        </div>
                    </div>{/* .hero-content-hero-content-overlay */}
                </div>{/* .hero-content */}
                <div>
                    <div className="icon-boxes">
                        <div className="container-fluid">
                            <div className="flex flex-wrap align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-user" />
                                    </div>{/* .icon */}
                                    <header className="entry-header">
                                        <h2 className="entry-title">Explore our school</h2>
                                    </header>{/* .entry-header */}
                                    <div className="entry-content">
                                        <p>Learn from numbers of teachers around the world, different areas with different focuses.</p>
                                    </div>{/* .entry-content */}
                                    <footer className="entry-footer read-more pointer" onClick={() => {this.props.history.push('/introduction');}}>
                                        <a href="#">read more<i className="fa fa-arrow-right" /></a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-folder" />
                                    </div>{/* .icon */}
                                    <header className="entry-header">
                                        <h2 className="entry-title">Outstanding Students</h2>
                                    </header>{/* .entry-header */}
                                    <div className="entry-content">
                                        <p>Expect more in the future</p>
                                    </div>{/* .entry-content */}
                                    <footer className="entry-footer read-more pointer" >
                                        <a href="#">read more<i className="fa fa-arrow-right" /></a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-book" />
                                    </div>{/* .icon */}
                                    <header className="entry-header">
                                        <h2 className="entry-title">May flower art foundation</h2>
                                    </header>{/* .entry-header */}
                                    <div className="entry-content">
                                        <p>Expect more in the future</p>
                                    </div>{/* .entry-content */}
                                    <footer className="entry-footer read-more">
                                        <a href="#">read more<i className="fa fa-arrow-right" /></a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-world" />
                                    </div>{/* .icon */}
                                    <header className="entry-header">
                                        <h2 className="entry-title">News and honors</h2>
                                    </header>{/* .entry-header */}
                                    <div className="entry-content">
                                        <p>Check out the latest music news around the world</p>
                                    </div>{/* .entry-content */}
                                    <footer className="entry-footer read-more pointer" onClick={() => {this.props.history.push('/honor');}}>
                                        <a href="#">read more<i className="fa fa-arrow-right" /></a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                            </div>{/* .row */}
                        </div>{/* .container-fluid */}
                    </div>{/* .icon-boxes */}
                    <section className="about-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 align-content-lg-stretch">
                                    <header className="heading">
                                        <h2 className="entry-title">About Us</h2>
                                        <p>
                                            The Sino-American Mayflower Art Center ( hereafter, “the Art Center”) is located at Howard county in Maryland. Mr. Yiming Wu, the founder of the Arts Center, he is a excellent professional composer from China.
                                            <br /><br /> In 2017, Mr.Wu and his family immigrated to Maryland, USA, then founded the Art Center. He has developed a unique teaching method for composition and actively cultivates creative composers for the local.
                                            <br /><br />Mr. Yiming Wu has been proposing the idea of “achieving professional level with spare-time learning.” Through the meticulous guidance of Mr. Yiming Wu and the hard work of the students, from 2019 to June 2020, 15 students of the Art Center have won prizes from 46 important composition competitions.
                                        </p>

                                    </header>{/* .heading */}
                                    {/*<div className="entry-content MusicSchool-stats">*/}
                                    {/*    <div className="stats-wrap flex flex-wrap justify-content-lg-between">*/}
                                    {/*        <div className="stats-count">*/}
                                    {/*            50<span>M+</span>*/}
                                    {/*            <p>STUDENTS LEARNING</p>*/}
                                    {/*        </div>/!* .stats-count *!/*/}
                                    {/*        <div className="stats-count">*/}
                                    {/*            30<span>K+</span>*/}
                                    {/*            <p>ACTIVE COURSES</p>*/}
                                    {/*        </div>/!* .stats-count *!/*/}
                                    {/*        <div className="stats-count">*/}
                                    {/*            340<span>+</span>*/}
                                    {/*            <p>INSTRUCTORS ONLINE</p>*/}
                                    {/*        </div>/!* .stats-count *!/*/}
                                    {/*        <div className="stats-count">*/}
                                    {/*            20<span>+</span>*/}
                                    {/*            <p>Country Reached</p>*/}
                                    {/*        </div>/!* .stats-count *!/*/}
                                    {/*    </div>/!* .stats-wrap *!/*/}
                                    {/*</div>/!* .MusicSchool-stats *!/*/}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
                                    <div className="MusicSchool-video position-relative">

                                        <img src={imagesvideo} alt="" />
                                    </div>{/* .MusicSchool-video */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </section>{/* .about-section */}
                    <section className="featured-courses vertical-column courses-wrap">
                        <div className="container">
                            <div className="row mx-m-25">
                                <div className="col-12 px-25">
                                    <header className="heading flex flex-wrap justify-content-between align-items-center">
                                        <h2 className="entry-title">Featured Courses</h2>
                                    </header>{/* .heading */}
                                </div>{/* .col */}
                                <div className="col-12 col-md-6 col-lg-4 px-25">
                                    <CourseCard
                                        id = {"1"}
                                        name = {"Composition"}
                                        content = {"This course aims to offer students one-on-one private instructions and design the course plan based on students' different music styles and unique personal creativity."}
                                        teacher = {"Wu Yiming, Wang Meng"}
                                    />
                                </div>{/* .col */}
                                <div className="col-12 col-md-6 col-lg-4 px-25">
                                    <CourseCard
                                        id = {"2"}
                                        name = {"Music Theory"}
                                        content = {"This course helps students systematically establish the base of musicianship. The course is divided into three levels, A1-A3, which will smoothly take you from Beginner level to Advance level. "}
                                        // teacher = {""}
                                    />
                                </div>{/* .col */}
                                <div className="col-12 col-md-6 col-lg-4 px-25">
                                    <CourseCard
                                        id = {"3"}
                                        name = {"Western Music History "}
                                        content = {"The Western Music History course explores the music of the 17th Century through the 21st Century. Musical concepts and developments, composers, musical examples, and class discussions will all be part of the 10-week course. "}
                                        // teacher = {""}
                                    />
                                </div>{/* .col */}

                                <div className="col-12 px-25 flex justify-content-center">
                                    <a className="btn pointer" onClick={() => {this.props.history.push('/course');}}>view all courses</a>
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </section>{/* .courses-wrap */}
                    <section className="latest-news-events">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <header className="heading flex justify-content-between align-items-center">
                                        <h2 className="entry-title">Latest News &amp; Events</h2>
                                    </header>{/* .heading */}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-6">
                                    <div className="featured-event-content">
                                        <figure className="event-thumbnail position-relative m-0">
                                            <a href="https://mp.weixin.qq.com/s/5oYnAzYaCzSWuc5sCtcQMw"><img src={news5} alt="" /></a>
                                            <div className="posted-date position-absolute">
                                                <div className="day">23</div>
                                                <div className="month">mar</div>
                                            </div>{/* .posted-date */}
                                        </figure>{/* .event-thumbnail */}
                                        <header className="entry-header flex flex-wrap align-items-center">
                                            <h2 className="entry-title"><a href="https://mp.weixin.qq.com/s/5oYnAzYaCzSWuc5sCtcQMw">Student Yihao Wang, Yiru Zhao and Yida He won prices in the competitions</a></h2>
                                            <div className="event-location"><i className="fa fa-map-marker" />40 Baria Sreet 133/2 NewYork City, US</div>
                                            <div className="event-duration"><i className="fa fa-calendar" />10 Dec - 12 dec</div>
                                        </header>{/* .entry-header */}
                                    </div>{/* .featured-event-content */}
                                </div>{/* .col */}
                                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                    <div className="event-content flex flex-wrap justify-content-between align-content-stretch">
                                        <figure className="event-thumbnail">
                                            <a href="http://www.capitalcityinfo.net/cci/2020/06/24/%E4%BA%94%E6%9C%88%E8%8A%B1%E5%BC%80%E7%BB%9A%E4%B8%BD/?from=timeline"><img src={news6} alt="" /></a>
                                        </figure>{/* .course-thumbnail */}
                                        <div className="event-content-wrap">
                                            <header className="entry-header">
                                                <div className="posted-date">
                                                    <i className="fa fa-calendar" /> 22 Mar 2018
                                                </div>{/* .posted-date */}
                                                <h2 className="entry-title"><a href="http://www.capitalcityinfo.net/cci/2020/06/24/%E4%BA%94%E6%9C%88%E8%8A%B1%E5%BC%80%E7%BB%9A%E4%B8%BD/?from=timeline">The new vienna symphony 1 International Composer competition results</a></h2>
                                                <div className="entry-meta flex flex-wrap align-items-center">
                                                    <div className="post-author"><a href="#">Ms. Lara Croft </a></div>
                                                    <div className="post-comments">02 Comments</div>
                                                </div>{/* .entry-meta */}
                                            </header>{/* .entry-header */}
                                            <div className="entry-content">
                                                <p>He is a talented student in our school.</p>
                                            </div>{/* .entry-content */}
                                        </div>{/* .event-content-wrap */}
                                    </div>{/* .event-content */}
                                    <div className="event-content flex flex-wrap justify-content-between align-content-lg-stretch">
                                        <figure className="event-thumbnail">
                                            <a href="http://www.ccom.edu.cn/xwyhd/xsjd/2020s/202006/t20200609_70535.html?from=timeline&isappinstalled=0"><img src={news7} alt="" /></a>
                                        </figure>{/* .course-thumbnail */}
                                        <div className="event-content-wrap">
                                            <header className="entry-header">
                                                <div className="posted-date">
                                                    <i className="fa fa-calendar" /> 22 Mar 2018
                                                </div>{/* .posted-date */}
                                                <h2 className="entry-title"><a href="http://www.ccom.edu.cn/xwyhd/xsjd/2020s/202006/t20200609_70535.html?from=timeline&isappinstalled=0">Yida He won the price in the competiton</a></h2>
                                                <div className="entry-meta flex flex-wrap align-items-center">
                                                    <div className="post-author"><a href="#">Ms. Lara Croft </a></div>
                                                    <div className="post-comments">02 Comments</div>
                                                </div>{/* .entry-meta */}
                                            </header>{/* .entry-header */}
                                            <div className="entry-content">
                                                <p>He is a talented student in our school.</p>
                                            </div>{/* .entry-content */}
                                        </div>{/* .event-content-wrap */}
                                    </div>{/* .event-content */}
                                </div>{/* .col */}
                            </div>{/* .row */}
                        </div>{/* .container */}
                    </section>{/* .latest-news-events */}
                    <Footer/>
                </div>

            </div>
        )
    }
}
export const Home = withRouter(HomeReact)