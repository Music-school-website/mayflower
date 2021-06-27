import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";
import YouTube from "react-youtube";
//import {Footer} from "../footer";
import PropTypes from "prop-types";
import {i18n} from "../../i18n";
import {connect} from "react-redux";

class SingleCourseReact extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }
    constructor(props) {

        super(props);
        this.state = {
            toggle:false
        }
        this.toggleTeacher = this.toggleTeacher.bind(this)
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    toggleTeacher=()=>{
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
        console.log(this.state.toggle)
    }
    render() {
        const opts = {
            height: '400',
            width: '720',
            playerVars: {
                autoplay: 1,
            },
        };
        const id = this.props.match.params.id - 1
        const text = i18n(this.props.language).page.courses
        console.log(text.content[7].content)
        return (
            <div>
                <div>

                    <PageHeader status = {2}/>
                    <div className="container">
                        <div className="row center">

                            <div className="col-12">
                                <div className="single-course-wrap">
                                    {text.content[id].videoId === ''?(
                                        <div></div>
                                    ):(
                                        <div className="flex flex-wrap align-items-center mt-3">
                                            <YouTube videoId={text.content[id].videoId} opts={opts} onReady={this._onReady}/>
                                        </div>
                                    )}
                                    <div className="course-info flex flex-wrap align-items-center" >
                                        {
                                            text.content[id].teacher.map((item, index)=>{
                                                return<div className="course-author flex flex-wrap align-items-center mt-3" key={index}>
                                                    <img src={item.avator} onClick={()=>{this.toggleTeacher()}}/>
                                                    <div className="author-wrap">
                                                        <label className="m-0">Teacher</label>
                                                        <div className="author-name"><a>{item.name}</a></div>
                                                    </div>
                                                </div>

                                            })
                                        }
                                        <div className="course-cats mt-3">
                                            <label className="m-0">Categories</label>
                                            <div className="author-name"><a>{text.content[id].name}</a></div>
                                        </div>{/* .course-cats */}
                                        {/*<div className="course-students mt-3">*/}
                                        {/*    <label className="m-0">Student</label>*/}
                                        {/*    <div className="author-name"><a>26 (REGISTERED)</a></div>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="single-course-cont-section">

                                        <h2>Description</h2>
                                        <div>
                                            {text.content[id].content.map((item, index)=>{
                                                return <p key={index}>
                                                    {item}
                                                </p>
                                            })}
                                        </div>
                                    </div>
                                </div>{/* .single-course-wrap */}
                                <div className="col-12 px-25 mt-5 flex justify-content-center flex">
                                    <a className="btn pointer mr-5" onClick={() => {this.toggleTeacher()}}>About teacher</a>
                                    <a className="btn pointer" onClick={() => {this.props.history.push('/course');}}>other courses</a>
                                </div>{/* .col */}
                                {
                                    this.state.toggle?  text.content[id].teacher.map((item, index)=>{
                                            return <div className='border bg-gradient p-3 mt-5' key={index}>
                                                <div className='teacher flex justify-content-center'>
                                                    <img src={item.avator}/>
                                                </div>
                                                <h2 style={{textAlign:'center'}}>{item.name}</h2>
                                                <div
                                                    className="content mt-3"
                                                    dangerouslySetInnerHTML={{ __html: item.introduction}}
                                                />
                                            </div>
                                        }):null
                                }

                            </div>{/* .col */}
                        </div>{/* .row */}

                    </div>{/* .container */}
                    <br/>

                </div>

            </div>

        )
    }
}

export const SingleCourse = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(SingleCourseReact)
)