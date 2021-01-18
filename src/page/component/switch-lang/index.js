import React from "react";
//import {withRouter} from 'react-router-dom'
import { Button } from 'react-bootstrap';
//import {Alert} from "react-bootstrap";
import {connect} from 'react-redux';

import * as actionJs from '../../../redux/action';
import {store} from "../../../redux/store";
import {i18n} from "../../../i18n";

import "./index.css"
import PropTypes from "prop-types";

class SwitchLangReact extends React.Component{
    static propTypes = {
        // self

        // React Redux
        language: PropTypes.string.isRequired,
        remind: PropTypes.string.isRequired,
        // React Router
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            alert:false
        }

    }
    render() {
        const text = i18n(this.props.language).page
        return (
            <div>
                {/*{*/}
                {/*    this.state.alert && <Alert variant="dark" className="remind">*/}
                {/*    {this.props.remind}*/}
                {/*    </Alert>*/}
                {/*}*/}

                <div className="language">
                    <Button
                        variant="outline-warning"
                        size = "sm"
                        onClick={() => {
                            setTimeout(()=>{
                                store.dispatch(actionJs.creator(
                                    actionJs.type.language,
                                    this.props.language === 'en'? 'zh' : 'en',
                                ));
                                // this.setState({
                                //     remind:true
                                // })
                            }, 1000)
                        }}
                    >
                        {text.language}
                    </Button>

                </div>
            </div>

        )
    }
}
export const SwitchLang = connect(
    (state) =>{
        return{
            language:state.language
        };
    },
)(SwitchLangReact);

