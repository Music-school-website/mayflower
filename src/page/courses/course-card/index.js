import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
//import piano from "../../images/piano-at-home.jpg"
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
                                <h2 className="entry-title"><a href="#">{this.props.name}</a></h2>
                                <div className="entry-meta flex align-items-center">
                                    <div className="course-author"><a href="#">{this.props.teacher}</a></div>
                                    {/*<div className="course-date">July 21, 2018</div>*/}
                                </div>{/* .course-date */}
                            </header>{/* .entry-header */}
                            <div>{this.props.content}</div>
                            {/*<footer className="entry-footer flex justify-content-between align-items-center">*/}
                            {/*    <div className="course-cost">*/}
                            {/*        $45 <span className="price-drop">$68</span>*/}
                            {/*    </div>/!* .course-cost *!/*/}
                            {/*    <div className="course-ratings flex justify-content-end align-items-center">*/}
                            {/*        <span className="fa fa-star checked" />*/}
                            {/*        <span className="fa fa-star checked" />*/}
                            {/*        <span className="fa fa-star checked" />*/}
                            {/*        <span className="fa fa-star checked" />*/}
                            {/*        <span className="fa fa-star-o" />*/}
                            {/*        <span className="course-ratings-count">(4 votes)</span>*/}
                            {/*    </div>/!* .course-ratings *!/*/}
                            {/*</footer>/!* .entry-footer *!/*/}
                        </div>{/* .course-content-wrap */}
                    </div>{/* .course-content */}
                </div>


        )
    }
}
export const CourseCard = withRouter(CourseCardReact)