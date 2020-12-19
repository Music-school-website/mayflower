import React from "react";
//import {withRouter} from 'react-router-dom'
import { Button } from 'antd';
import {connect} from 'react-redux';

import * as actionJs from '../../redux/action';
import {store} from "../../redux/store";
import {i18n} from "../../i18n";

import "./index.css"
import PropTypes from "prop-types";

class SwitchLangReact extends React.Component{
    static propTypes = {
        // self

        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        const text = i18n(this.props.language).page
        return (
            <div>
                <div className="language">
                    <Button
                        onClick={() => {
                            store.dispatch(actionJs.creator(
                                actionJs.type.language,
                                this.props.language === 'en'? 'zh' : 'en',
                            ));
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

