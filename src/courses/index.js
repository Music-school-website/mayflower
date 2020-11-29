import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../page-header";
import {Footer} from "../footer";
import {CourseCard} from "./course-card";

class CourseReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <PageHeader status = {2}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumbs">
                                <ul className="flex flex-wrap align-items-center p-0 m-0">
                                    <li><a href="#"><i className="fa fa-home" /> Home</a></li>
                                    <li>Courses</li>
                                </ul>
                            </div>{/* .breadcrumbs */}
                        </div>{/* .col */}
                    </div>{/* .row */}
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="featured-courses courses-wrap">
                                <div className="row mx-m-25">
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"1"}
                                            name = {"Composition"}
                                            content = {"This course aims to offer students one-on-one private instructions and design the course plan based on students' different music styles and unique personal creativity."}
                                            teacher = {"Wu Yiming, Wang Meng"}
                                        />
                                    </div>{/* .col */}
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"2"}
                                            name = {"Music Theory"}
                                            content = {"This course helps students systematically establish the base of musicianship. The course is divided into three levels, A1-A3, which will smoothly take you from Beginner level to Advance level. "}
                                            // teacher = {""}
                                        />
                                    </div>{/* .col */}
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"3"}
                                            name = {"Western Music History "}
                                            content = {"The Western Music History course explores the music of the 17th Century through the 21st Century. Musical concepts and developments, composers, musical examples, and class discussions will all be part of the 10-week course. "}
                                            // teacher = {""}
                                        />
                                    </div>{/* .col */}
                                </div>{/* .row */}
                            </div>{/* .featured-courses */}
                        </div>{/* .col */}
                        <div className="col-12 col-lg-4">
                            <div className="sidebar">
                                <div className="latest-courses">
                                    <h2>Latest Courses</h2>
                                    <ul className="p-0 m-0">
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src="images/t-1.jpg" alt="" />
                                            <div className="content-wrap">
                                                <h3><a href="#">The Complete Financial Analyst Training</a></h3>
                                                <div className="course-cost free-cost">Free</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src="images/t-2.jpg" alt="" />
                                            <div className="content-wrap">
                                                <h3><a href="#">Complete Java
                                                    Masterclass</a></h3>
                                                <div className="course-cost free-cost">Free</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src="images/t-3.jpg" alt="" />
                                            <div className="content-wrap">
                                                <h3><a href="#">The Complete Digital Marketing Course</a></h3>
                                                <div className="course-cost">$24</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src="images/t-4.jpg" alt="" />
                                            <div className="content-wrap">
                                                <h3><a href="#">Photoshop CC 2020
                                                    MasterClass</a></h3>
                                                <div className="course-cost">$18</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                    </ul>
                                </div>{/* .latest-courses */}
                                <div className="ads">
                                    <img src="images/ads.jpg" alt="" />
                                </div>{/* .ads */}
                            </div>{/* .sidebar */}
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}
                <br/>
                <br/>

                <Footer/>
            </div>

        )
    }
}
export const Course = withRouter(CourseReact)