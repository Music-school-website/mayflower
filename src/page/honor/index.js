import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../page-header";
import news5 from "../images/news5.png";
import news8 from "../images/news8.png"
import {Footer} from "../footer";

class HonorReact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="blog-page">
                    <PageHeader status = {4}/>


                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumbs">
                                    <ul className="flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li>Honors</li>
                                    </ul>
                                </div>{/* .breadcrumbs */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="blog-posts">
                                    <div className="row mx-m-25">
                                        <div className="col-12 px-25">
                                            <div className="blog-post-content">
                                                <figure className="blog-post-thumbnail position-relative m-0">
                                                    <a href="http://www.capitalcityinfo.net/cci/2020/06/24/%E4%BA%94%E6%9C%88%E8%8A%B1%E5%BC%80%E7%BB%9A%E4%B8%BD/?from=timeline"><img src={news5} alt="" /></a>
                                                    <div className="posted-date position-absolute">
                                                        <div className="day">10</div>
                                                        <div className="month">July</div>
                                                    </div>
                                                </figure>{/* .blog-post-thumbnail */}
                                                <div className="blog-post-content-wrap ml-5">
                                                    <header className="entry-header">
                                                        <h2 className="entry-title"><a href="http://www.capitalcityinfo.net/cci/2020/06/24/%E4%BA%94%E6%9C%88%E8%8A%B1%E5%BC%80%E7%BB%9A%E4%B8%BD/?from=timeline">Good News: Won prizes in Vienna, Austria </a></h2>
                                                        <div className="entry-meta flex align-items-center">
                                                            <div className="post-author"><a>Zhao Tianyi, Wen Ziyang and other 6 students</a></div>
                                                        </div>{/* .entry-meta */}
                                                    </header>{/* .entry-header */}
                                                    <div className="entry-content">
                                                        <p>Scores of students from the Department of Music composition have achieved good results in the New Symphony Orchestra international competition in Vienna, Austria</p>
                                                    </div>{/* .entry-content */}
                                                </div>{/* .blog-post-content-wrap */}
                                            </div>{/* .blog-post-content */}
                                        </div>{/* .col */}

                                        <div className="col-12 px-25">
                                            <div className="blog-post-content">
                                                <figure className="blog-post-thumbnail position-relative m-0">
                                                    <a href="http://www.ccom.edu.cn/xwyhd/xsjd/2020s/202006/t20200609_70535.html?from=timeline&isappinstalled=0"><img src={news8} alt="" /></a>
                                                    <div className="posted-date position-absolute">
                                                        <div className="day">9</div>
                                                        <div className="month">Jun</div>
                                                    </div>
                                                </figure>{/* .blog-post-thumbnail */}
                                                <div className="blog-post-content-wrap ml-5">
                                                    <header className="entry-header">
                                                        <h2 className="entry-title"><a href="http://www.ccom.edu.cn/xwyhd/xsjd/2020s/202006/t20200609_70535.html?from=timeline&isappinstalled=0">Won the prize in the Franz Schubert in Austria</a></h2>
                                                        <div className="entry-meta flex align-items-center">
                                                            <div className="post-author"><a>Wang Yihan, Zhao Yiru </a></div>
                                                            {/*<div className="post-comments"><a href="#">33 Comments</a></div>*/}
                                                        </div>{/* .entry-meta */}
                                                    </header>{/* .entry-header */}
                                                    <div className="entry-content">
                                                        <p>Students Wang Yihan, Zhao Yiru and secondary school he Yida have won prizes at the international composition competition of the Franz Schubert in Austria</p>
                                                    </div>{/* .entry-content */}
                                                </div>{/* .blog-post-content-wrap */}
                                            </div>{/* .blog-post-content */}
                                        </div>{/* .col */}
                                    </div>{/* .blog-posts */}
                                </div>{/* .col */}
                                <div className="pagination flex flex-wrap justify-content-between align-items-center">
                                    {/*<div className="col-12 col-lg-4 order-2 order-lg-1 mt-3 mt-lg-0">*/}
                                    {/*    <ul className="flex flex-wrap align-items-center order-2 order-lg-1 p-0 m-0">*/}
                                    {/*        <li className="active"><a href="#">1</a></li>*/}
                                    {/*        <li><a href="#">2</a></li>*/}
                                    {/*        <li><a href="#">3</a></li>*/}
                                    {/*        <li><a href="#"><i className="fa fa-angle-right" /></a></li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-12 flex justify-content-start justify-content-lg-end col-lg-8 order-1 order-lg-2">*/}
                                    {/*    <div className="pagination-results flex flex-wrap align-items-center">*/}
                                    {/*        <p className="m-0">Showing 1–3 of 12 results</p>*/}
                                    {/*        <form>*/}
                                    {/*            <select>*/}
                                    {/*                <option>Show: 06</option>*/}
                                    {/*                <option>Show: 12</option>*/}
                                    {/*                <option>Show: 18</option>*/}
                                    {/*                <option>Show: 24</option>*/}
                                    {/*            </select>*/}
                                    {/*        </form>*/}
                                    {/*    </div>/!* .pagination-results *!/*/}
                                    {/*</div>*/}
                                </div>{/* .pagination */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                    </div>{/* .container */}
<Footer/>
                </div>
            </div>

        )
    }
}
export const Honor = withRouter(HonorReact)