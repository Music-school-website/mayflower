import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";
import {Footer} from "../component/footer";
import {CourseCard} from "./course-card";
import composition from "../images/composition.png"
import history from "../images/history.jpg"
import theory from "../images/theory.png"
import aural from "../images/aural2.jpg"
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import PropTypes from "prop-types";
class CourseReact extends React.Component{
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
        const text = i18n(this.props.language).page.courses
        return (
            <div>
                <PageHeader status = {2}/>
                <div className="container">
                    <div className="row">
                        <Breadcrumbs breadcrumbs={text.breadcrumb}/>
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
                                            url = {composition}
                                        />
                                    </div>{/* .col */}
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"2"}
                                            name = {"Music Theory"}
                                            content = {"This course helps students systematically establish the base of musicianship. The course is divided into three levels, A1-A3, which will smoothly take you from Beginner level to Advance level. "}
                                            // teacher = {""}
                                            url = {theory}
                                        />
                                    </div>{/* .col */}
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"3"}
                                            name = {"Western Music History "}
                                            content = {"The Western Music History course explores the music of the 17th Century through the 21st Century. Musical concepts and developments, composers, musical examples, and class discussions will all be part of the 10-week course. "}
                                            // teacher = {""}
                                            url = {history}
                                        />
                                    </div>{/* .col */}
                                    <div className="col-12 col-md-6 px-25">
                                        <CourseCard
                                            id = {"4"}
                                            name = {"Aural Skills"}
                                            content = {"Aural skills is equally crucial as in Music Theory, which is  required for individual musicality. This course is a two-level studies focusing on ear training, sight-singing, rhythm, and dictation. "}
                                            // teacher = {""}
                                            url = {aural}
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
                                            <img src={composition} alt="" />
                                            <div className="content-wrap">
                                                <h3><a>Composition</a></h3>
                                                <div className="course-cost free-cost">Price</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src={theory} alt="" />
                                            <div className="content-wrap">
                                                <h3><a>Music Theory</a></h3>
                                                <div className="course-cost free-cost">Price</div>
                                            </div>{/* .content-wrap */}
                                        </li>
                                        <li className="flex flex-wrap justify-content-between align-items-center">
                                            <img src={history} alt="" />
                                            <div className="content-wrap">
                                                <h3><a>Western Music History</a></h3>
                                                <div className="course-cost">Price</div>
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
export const Course = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(CourseReact)
)
//export const Course = withRouter(CourseReact)