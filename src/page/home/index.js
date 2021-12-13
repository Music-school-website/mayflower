
import React from "react";
import {withRouter} from 'react-router-dom'
import {Header} from "../component/nav-bar";
import {Footer} from "../component/footer";
import "../index.css"
import "../icon/themify-icons.css"
import logo from "../images/logo2.png";
import {CourseCard} from "../courses/course-card";
import PropTypes from "prop-types";
import {i18n} from "../../i18n";
import {connect} from "react-redux";


class HomeReact extends React.Component{
    static propTypes = {
        // self

        // React Router
        status: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const text = i18n(this.props.language).page.courses
        const home = i18n(this.props.language).page.home
        // const intro = i18n(this.props.language).page.introduction
        return (
            <div>
                <div className="hero-content">
                    <Header/>
                    <div className="hero-content-overlay">
                        <div className="hero-content-bgimg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
                                            <div style={{background:'black',marginBottom:'10px',padding:'0px'}}>
                                                {home.welcome}
                                            </div>
                                            <div style={{background:'black',padding:'0px'}}>
                                                {home.subtitle}
                                            </div>
                                            <div className="entry-content">
                                                {home.intro}
                                            </div>{/* .entry-content */}

                                        </div>{/* .hero-content-wrap */}
                                    </div>{/* .col */}
                                </div>{/* .row */}
                            </div>{/* .container */}
                        </div>
                    </div>{/* .hero-content-hero-content-overlay */}
                </div>{/* .hero-content */}
                <div>
                    <div className="icon-boxes">
                        <div className="container-fluid">
                            <div className="flex flex-wrap align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-user" />
                                    </div>{/* .icon */}
                                    {home.explore}
                                    <footer className="entry-footer read-more pointer" onClick={() => {this.props.history.push('/introduction');}}>
                                        <a  >read more</a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-folder" />
                                    </div>{/* .icon */}
                                    {home.outstanding}
                                    <footer className="entry-footer read-more pointer" onClick={() => {this.props.history.push('/honor');}} >
                                        <a  >read more</a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-book" />
                                    </div>{/* .icon */}
                                    {home.foundation}
                                    <footer className="entry-footer read-more pointer" onClick={()=>{this.props.history.push('/foundation')}}>
                                        <a  >read more</a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                                <div className="icon-box">
                                    <div className="icon">
                                        <span className="ti-world" />
                                    </div>{/* .icon */}
                                    {home.news}
                                    <footer className="entry-footer read-more pointer" onClick={() => {this.props.history.push('/honor');}}>
                                        <a  >read more</a>
                                    </footer>{/* .entry-footer */}
                                </div>{/* .icon-box */}
                            </div>{/* .row */}
                        </div>{/* .container-fluid */}
                    </div>{/* .icon-boxes */}
                    <div className="whole-bg">
                        <div className="container bg-gradient">
                            <section className="about-section">
                                <div>
                                    <div className="row">
                                        <div className="col-12 col-lg-5 flex align-content-center mt-5 mt-lg-0">
                                            <div className="MusicSchool-video position-relative">
                                                <img src={logo} alt="" style={{width:'auto', height:'400px', marginRight:'-2vw'}} />
                                            </div>{/* .MusicSchool-video */}
                                        </div>{/* .col */}
                                        <div className="col-12 col-lg-7 align-content-lg-stretch">
                                            {home.about}

                                        </div>{/* .col */}

                                    </div>{/* .row */}
                                </div>{/* .container */}
                            </section>{/* .about-section */}
                            <section className="featured-courses latest-news-events vertical-column courses-wrap">
                                <div>
                                    <div className="row mx-m-25">
                                        <div className="col-12 px-25">
                                            <header className="heading flex flex-wrap justify-content-between align-items-center">
                                                <h2 className="entry-title">Featured Courses</h2>
                                            </header>{/* .heading */}
                                        </div>{/* .col */}

                                        {text.content.map((item, index)=>{
                                            if (index < 3) {
                                                return  <div className="col-12 col-md-6 col-lg-4 px-25" key={index}>
                                                    <CourseCard
                                                        id = {item.id}
                                                        name = {item.name}
                                                        content = {item.summary}
                                                        teacher = {item.teacher}
                                                        url = {item.url}
                                                    />
                                                </div>
                                            }

                                        })}
                                        <div className="col-12 px-25 flex justify-content-center">
                                            <a className="btn pointer" onClick={() => {this.props.history.push('/course');}}>view all courses</a>
                                        </div>{/* .col */}
                                    </div>{/* .row */}
                                </div>{/* .container */}
                            </section>{/* .courses-wrap */}
                            <Footer/>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export const Home = withRouter(
    connect((state)=>{
        return{language:state.language}
    })(HomeReact)
)
// export const Home = withRouter(HomeReact)