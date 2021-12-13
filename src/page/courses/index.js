import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";
import {Footer} from "../component/footer";
import {CourseCard} from "./course-card";
// import aural from "../images/aural.png"
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
                        <div className="col-12 col-lg-12">
                            <div className="featured-courses courses-wrap">
                                <div className="row mx-m-25">
                                    {text.content.map((item, index)=>{
                                        return  <div className="col-12 col-md-4 px-25" key={index}>
                                            <CourseCard
                                                id = {item.id}
                                                name = {item.name}
                                                content = {item.summary}
                                                teacher = {item.teacher}
                                                url = {item.url}
                                            />
                                        </div>
                                    })}
                                </div>
                            </div>{/* .featured-courses */}
                        </div>{/* .col */}
                        {/*<div className="col-12 col-lg-4">*/}
                        {/*    <div className="sidebar">*/}
                        {/*        <div className="latest-courses">*/}
                        {/*            <h2>Latest Courses</h2>*/}
                        {/*            <ul className="p-0 m-0">*/}
                        {/*                <li className="flex flex-wrap justify-content-between align-items-center">*/}
                        {/*                    <img src={composition} alt="" />*/}
                        {/*                    <div className="content-wrap">*/}
                        {/*                        <h3><a>Composition</a></h3>*/}
                        {/*                        <div className="course-cost free-cost">Price</div>*/}
                        {/*                    </div>/!* .content-wrap *!/*/}
                        {/*                </li>*/}
                        {/*                <li className="flex flex-wrap justify-content-between align-items-center">*/}
                        {/*                    <img src={theory} alt="" />*/}
                        {/*                    <div className="content-wrap">*/}
                        {/*                        <h3><a>Music Theory</a></h3>*/}
                        {/*                        <div className="course-cost free-cost">Price</div>*/}
                        {/*                    </div>/!* .content-wrap *!/*/}
                        {/*                </li>*/}
                        {/*                <li className="flex flex-wrap justify-content-between align-items-center">*/}
                        {/*                    <img src={history} alt="" />*/}
                        {/*                    <div className="content-wrap">*/}
                        {/*                        <h3><a>Western Music History</a></h3>*/}
                        {/*                        <div className="course-cost">Price</div>*/}
                        {/*                    </div>/!* .content-wrap *!/*/}
                        {/*                </li>*/}

                        {/*            </ul>*/}
                        {/*        </div>/!* .latest-courses *!/*/}
                        {/*    </div>/!* .sidebar *!/*/}
                        {/*</div>*/}
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