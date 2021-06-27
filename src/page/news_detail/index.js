import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";

import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
//import news5 from "../images/news5.png";
//import news8 from "../images/news8.png"
import {Footer} from "../component/footer";
//import { IoAddOutline } from "react-icons/io5";


import PropTypes from "prop-types";



class NewsReact extends React.Component{
    static propTypes = {
        // self
        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
        status: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            // honor:[]
        }
    }
    // componentDidMount() {
    //     this.setState({
    //         honor:honor
    //     })
    // }
    render() {
        const text = i18n(this.props.language).page.news
        const content = text.content
        return (
            <div>
                <div className="blog-page" style={{background:'#f7f7f7'}}>
                    <PageHeader status = {7}/>
                    <div  className="container">
                        <Breadcrumbs breadcrumbs={text.breadcrumb}/>
                        <section className="latest-news-events">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <header className="heading flex justify-content-between align-items-center">
                                            <h2 className="entry-title">Latest News &amp; Events</h2>
                                        </header>{/* .heading */}
                                    </div>{/* .col */}

                                    <div className="col-12 col-lg-12 mt-2 mt-lg-0">
                                        {content.map((item, index)=>{
                                            return(
                                                <div
                                                    className="event-content flex flex-wrap justify-content-between align-content-stretch "
                                                    key={index}
                                                    onClick={()=>{
                                                        this.props.history.push(`/news_detail/${item.id}`)
                                                    }}
                                                >
                                                    <div className="event-content-wrap mt-5">
                                                        <header className="entry-header">
                                                            <div className="posted-date">
                                                                <i className="fa fa-calendar" /> {item.date}
                                                            </div>{/* .posted-date */}
                                                            <h2 className="entry-title"><a>{item.title}</a></h2>
                                                        </header>{/* .entry-header */}
                                                        <div className="entry-content">
                                                            <p>{item.summary}</p>
                                                        </div>{/* .entry-content */}
                                                    </div>
                                                </div>)

                                        })}
                                    </div>{/* .col */}
                                </div>{/* .row */}
                            </div>{/* .container */}
                        </section>{/* .latest-news-events */}

                    </div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
export const News = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(NewsReact)
)
//export const Honor = withRouter(HonorReact)