import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";

import {i18n} from "../../i18n";
import {connect} from "react-redux";
import {Breadcrumbs} from "../component/breadcrumbs";
import {Footer} from "../component/footer";
import {Table} from "react-bootstrap"
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
import PropTypes from "prop-types";




class NewsDetailReact extends React.Component{
    static propTypes = {
        // self
        // React Redux
        language: PropTypes.string.isRequired,
        // React Router
        status: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            // honor:[]
        }
    }
    onlyTextNews = (content, item) =>{
        return(
            <div className="col-12 col-lg-12 mt-2 mt-lg-0">
                <div className="event-content flex flex-wrap justify-content-between align-content-stretch ">
                    <div className="event-content-wrap mt-5">
                        <header className="entry-header">
                            <div className="posted-date">
                                <i className="fa fa-calendar" /> {item.date}
                            </div>{/* .posted-date */}
                            <h2 className="entry-title"><a>{item.title}</a></h2>
                        </header>{/* .entry-header */}
                        <div className="entry-content" >
                            <div
                                className="content"
                                dangerouslySetInnerHTML={{ __html: item.content.text}}
                            />
                        </div>{/* .entry-content */}
                    </div>
                </div>
            </div>
        )
    }

    textAndFormNews = (content, item) =>{
        return(
            <div className="col-12 col-lg-12 mt-2 mt-lg-0">
                <div className="event-content flex flex-wrap justify-content-between align-content-stretch ">
                    <div className="event-content-wrap mt-5">
                        <header className="entry-header">
                            <div className="posted-date">
                                <i className="fa fa-calendar" /> {item.date}
                            </div>{/* .posted-date */}
                            <h2 className="entry-title"><a>{item.title}</a></h2>
                        </header>{/* .entry-header */}
                        <div className="entry-content">
                            <div
                                className="content mb-5"
                                dangerouslySetInnerHTML={{ __html: item.content.text}}
                            />
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    {content.formData.header.map((item, index)=>{
                                        return <th key={index}>{item}</th>
                                    })}
                                </tr>
                                </thead>
                                <tbody>
                                {content.formData.content.map((item, index)=>{
                                    return(
                                        <tr key = {index}>
                                            <td>{item.id}</td>
                                            <td>{item.category}</td>
                                            <td>{item.name}</td>
                                            <td>{item.place}</td>
                                            <td>{item.instructor}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </div>{/* .entry-content */}
                    </div>
                </div>
            </div>
        )
    }
    mutiNews = (lang) =>{

        if (lang === 'CN') {
            const file = 'https://mayflower.s3.amazonaws.com/%E8%A5%BF%E8%B4%9D%E6%9F%B3%E6%96%AF.docx'
            const type = 'docx'
            return (
                <div style={{width:'100%'}}>
                <FileViewer
                    fileType={type}
                    filePath={file}
                />
                </div>
            );
        }
        else {
            const file = 'https://mayflower.s3.amazonaws.com/JSFest.docx'
            const type = 'docx'
            return (
                <div style={{width:'100%'}}>
                <FileViewer
                    fileType={type}
                    filePath={file}
                />
                </div>
            );
        }

    }
    switchRender = (id, content, item) =>{
        switch(id) {
            case 3: return this.textAndFormNews(content, item)
            case 5: return this.mutiNews(content.text)
            default: return this.onlyTextNews(content, item)
        }
    }

    render() {
        const id =  parseInt(this.props.match.params.id) - 1

        const text = i18n(this.props.language).page.news
        const item = text.content[id]
        const content = text.content[id].content
        return (
            <div>
                <div className="blog-page" style={{background:'#f7f7f7'}}>
                    <PageHeader status = {7}/>
                    <div  className="container">
                        <Breadcrumbs breadcrumbs={text.breadcrumb}/>
                        <section className="latest-news-events">
                            <div className="container">
                                <div className="row">
                                        {this.switchRender(id, content, item)}
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
export const NewsDetail = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(NewsDetailReact)
)
//export const Honor = withRouter(HonorReact)