import React from "react";
import {withRouter} from 'react-router-dom'
import "../index.css"
import {PageHeader} from "../component/page-header";

import PropTypes from "prop-types";
import {i18n} from "../../i18n";
import {connect} from "react-redux";

class TeacherReact extends React.Component{
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
    }

    render() {

        const id = this.props.match.params.id - 1
        const text = i18n(this.props.language).page.teacher
        return (
            <div>
                <div>

                    <PageHeader status = {2}/>
                    <div className="container">
                        <div className="row center">

                            <div className="col-12">
                                <div className='border bg-gradient p-3 mt-5' >
                                    <div className='teacher flex justify-content-center'>
                                        <img src={text[id].avator}/>
                                    </div>
                                    <h2 style={{textAlign:'center'}}>{text[id].name}</h2>
                                    <div
                                        className="content mt-3"
                                        dangerouslySetInnerHTML={{ __html: text[id].introduction}}
                                    />
                                </div>
                            </div>{/* .col */}
                        </div>{/* .row */}

                    </div>{/* .container */}
                    <br/>

                </div>

            </div>

        )
    }
}

export const Teacher = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(TeacherReact)
)