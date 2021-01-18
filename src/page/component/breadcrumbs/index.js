import React from "react";
import {withRouter} from 'react-router-dom'
import "../../index.css"
import "../../icon/themify-icons.css"
import PropTypes from "prop-types";
import "./loader.js"

class BreadcrumbsReact extends React.Component{
    static propTypes = {
        // self

        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        breadcrumbs:PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="breadcrumbs">
                        <ul className="flex flex-wrap align-items-center p-0 m-0">
                            <li><a onClick={()=>{this.props.history.push('/home')}}><i className="fa fa-home" /> {this.props.breadcrumbs[0]}</a></li>
                            <li>{this.props.breadcrumbs[1]}</li>
                        </ul>
                    </div>{/* .breadcrumbs */}
                </div>{/* .col */}
            </div>

        )
    }
}
export const Breadcrumbs = withRouter(BreadcrumbsReact)