import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../../page-header";
import {Footer} from "../../footer";




class PlaceReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="blog-page" style={{background:'#f7f7f7'}}>
                    <PageHeader status = {4}/>
                    <div  className="container">


                    </div>

                    <Footer/>
                </div>
            </div>

        )
    }
}
export const Place = withRouter(PlaceReact)