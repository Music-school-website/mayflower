import React from "react";
import {withRouter} from 'react-router-dom'
import "../../index.css"
import PropTypes from "prop-types";


class CourseCardReact extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        content:PropTypes.string.isRequired,
        teacher:PropTypes.string.isRequired,
        url:PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>

                    <div className="course-content pointer" onClick={() => {this.props.history.push(`/course/${this.props.id}`);}}>
                        <figure className="course-thumbnail">
                            <a><img src={this.props.url}/></a>
                        </figure>{/* .course-thumbnail */}
                        <div className="course-content-wrap">
                            <header className="entry-header">
                                <h2 className="entry-title">{this.props.name}</h2>
                                <div className="entry-meta flex flex-wrap align-items-center">
                                    {this.props.teacher.map((item, index)=>{
                                        if (this.props.teacher.length > 1 && index < this.props.teacher.length-1) {
                                            return  <span className="course-author" key={index}>{item.name},  </span>
                                        }
                                        else{
                                            return  <span className="course-author" key={index}>{item.name}</span>
                                        }

                                    })}
                                </div>{/* .course-date */}
                            </header>{/* .entry-header */}
                            <div>{this.props.content}</div>
                        </div>{/* .course-content-wrap */}
                    </div>{/* .course-content */}
                </div>


        )
    }
}
export const CourseCard = withRouter(CourseCardReact)