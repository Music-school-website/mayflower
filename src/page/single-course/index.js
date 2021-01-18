import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import YouTube from "react-youtube";
//import {Footer} from "../footer";
import author from "../../images/user-1.jpg"
import PropTypes from "prop-types";
import {content} from "./data.mock"

class SingleCourseReact extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        content:PropTypes.string.isRequired,
        teacher:PropTypes.string.isRequired,
    }
    constructor(props) {

        super(props);
        this.state = {

        }
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '400',
            width: '720',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        const id = this.props.match.params.id - 1
        return (
            <div>
                <div>

                    <PageHeader status = {2}/>
                    <div className="container">
                        <div className="row center">
                            <div className="col-12 offset-lg-0 col-lg-1">
                            </div>
                            <div className="col-12 col-lg-8">
                                <h1 className="entry-title">{content.course[id].name}</h1>
                                <div className="single-course-wrap">
                                    {content.course[id].videoId === ''?(
                                        <div></div>
                                    ):(
                                        <div className="flex flex-wrap align-items-center">
                                            <YouTube videoId={content.course[id].videoId} opts={opts} onReady={this._onReady} />
                                        </div>
                                    )}

                                    <div className="course-info flex flex-wrap align-items-center">
                                        <div className="course-author flex flex-wrap align-items-center mt-3">
                                            <img src={author} alt="" />
                                            <div className="author-wrap">
                                                <label className="m-0">Teacher</label>
                                                <div className="author-name"><a href="#">Ms. Wu</a></div>
                                            </div>{/* .author-wrap */}
                                        </div>{/* .course-author */}
                                        <div className="course-cats mt-3">
                                            <label className="m-0">Categories</label>
                                            <div className="author-name"><a>{content.course[id].name}</a></div>
                                        </div>{/* .course-cats */}
                                        <div className="course-students mt-3">
                                            <label className="m-0">Student</label>
                                            <div className="author-name"><a>26 (REGISTERED)</a></div>
                                        </div>{/* .course-students */}
                                        {/*<div className="buy-course mt-3">*/}
                                        {/*    <a className="btn" href="#">ADD to cart</a>*/}
                                        {/*</div>/!* .buy-course *!/*/}
                                    </div>{/* .course-info */}
                                    <div className="single-course-cont-section">
                                        {/*<h2>What Will I Learn?</h2>*/}
                                        {/*<ul className="p-0 m-0 green-ticked">*/}
                                        {/*    <li>Learn C++, the games industry standard language.</li>*/}
                                        {/*    <li>Develop strong and transferrable problem solving skills.</li>*/}
                                        {/*    <li>Gain an excellent knowledge of modern game development.</li>*/}
                                        {/*    <li>Learn how object oriented programming works in practice.</li>*/}
                                        {/*    <li>Gain a more fundamental understanding of computer operation.</li>*/}
                                        {/*</ul>*/}
                                        {/*<h2>Requirements</h2>*/}
                                        {/*<ul className="p-0 m-0 black-doted">*/}
                                        {/*    <li>64-bit PC capable of running Unreal 4 (recommended).</li>*/}
                                        {/*    <li>Or a Mac capable of running Unreal 4 (must support Metal).</li>*/}
                                        {/*    <li>About 15GB of free disc space.</li>*/}
                                        {/*</ul>*/}
                                        <h2>Description</h2>
                                        <div>
                                            {content.course[id].content.map((item, index)=>{
                                                return <p key={index}>
                                                    {item}
                                                </p>

                                            })}
                                        </div>

                                        {/*<ul className="p-0 m-0 black-doted">*/}
                                        {/*    <li>Competent and confident with using a computer.</li>*/}
                                        {/*    <li>Artists who want to bring their assets alive in a game engine.</li>*/}
                                        {/*    <li>Developers who want to re-skill across to coding.</li>*/}
                                        {/*    <li>Complete beginners who are willing to work hard.</li>*/}
                                        {/*    <li>Existing programmers who want to re-skill to game development.</li>*/}
                                        {/*</ul>*/}
                                    </div>
                                </div>{/* .single-course-wrap */}
                                <div className="col-12 px-25 mt-5 flex justify-content-center">
                                    <a className="btn pointer" onClick={() => {this.props.history.push('/course');}}>other courses</a>
                                </div>{/* .col */}
                            </div>{/* .col */}
                        </div>{/* .row */}

                    </div>{/* .container */}
                    <br/>

                </div>

            </div>

        )
    }
}
export const SingleCourse = withRouter(SingleCourseReact)