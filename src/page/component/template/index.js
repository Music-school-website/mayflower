import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"

class TempReact extends React.Component{
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                null
            </div>

        )
    }
}
export const Temp = withRouter(TempReact)