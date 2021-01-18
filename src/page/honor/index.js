import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
//import news5 from "../images/news5.png";
//import news8 from "../images/news8.png"
import {Footer} from "../component/footer";
//import { IoAddOutline } from "react-icons/io5";
import { BsFillLayersFill, BsMusicNote} from "react-icons/bs";
import {honor} from './honor.mock'
import PropTypes from "prop-types";



class HonorReact extends React.Component{
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
        const text = i18n(this.props.language).page.honor
        return (
            <div>
                <div className="blog-page" style={{background:'#f7f7f7'}}>
                    <PageHeader status = {4}/>
                    <div  className="container">
                        <Breadcrumbs breadcrumbs={text.breadcrumb}/>
                        <div className="col-12">
                            <VerticalTimeline
                                className="vertical-timeline--one-column-left"
                                layout = {'1-column-left'}
                            >
                                {honor && honor.map((item, index)=>{
                                    return(
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ borderTop: '5px solid  rgb(238, 120, 10)'}}
                                            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date={item.date}
                                            key={index}
                                            iconStyle={{ background: 'rgb(238, 120, 10)', color: '#fff' }}
                                            icon={<BsFillLayersFill/>}
                                        >
                                            <div className="row">
                                                <table className="ml-3">
                                                    <tr className="competition">
                                                        {item.competition}
                                                    </tr>
                                                    {item.prize.map((item, index)=>{
                                                        return(
                                                            <tr className="prize" key={index}>
                                                                {item}
                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                            </div>
                                        </VerticalTimelineElement>
                                    )

                                })}
                                <div
                                    onClick={()=>{
                                        this.props.history.push('/place')
                                        window.scrollTo(0, 0);
                                    }}>
                                    <VerticalTimelineElement
                                        contentStyle={{ background: 'rgb(238, 120, 10)', color: '#fff' }}
                                        iconStyle={{ background: 'rgb(56,55,73)', color: '#fff' }}
                                        icon={<BsMusicNote/>}
                                        className="pointer"
                                    >
                                        Show all of our honors
                                    </VerticalTimelineElement>
                                </div>


                            </VerticalTimeline>
                        </div>

                    </div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
export const Honor = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(HonorReact)
)
//export const Honor = withRouter(HonorReact)