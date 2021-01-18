import React from "react";
import {withRouter} from 'react-router-dom'
import "./index.css"
import {PageHeader} from "../component/page-header";
import {Footer} from "../component/footer";
import {Table} from "react-bootstrap"
import {table} from './table.mock'
import PropTypes from "prop-types";




class PlaceReact extends React.Component{
    static propTypes = {
        // self

        // React Router
        status: PropTypes.number.isRequired,
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
        return (
            <div>
                <div className="blog-page" style={{background:'#f7f7f7'}}>
                    <PageHeader status = {4}/>
                    <div  className="container">
                        <div className="breadcrumbs">
                            <ul className="flex flex-wrap align-items-center p-0 m-0">
                                <li><a className='pointer' onClick={()=>{this.props.history.push('/home')}}><i className="fa fa-home" /> Home</a></li>
                                <li><a className='pointer' onClick={()=>{this.props.history.push('/honor')}}>Honors</a></li>
                                <li>All</li>
                            </ul>
                        </div>{/* .breadcrumbs */}
                        <h2>Our honors</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Area</th>
                                <th>Name of Competition</th>
                                <th>Rewards</th>
                                {/*<th>Remark</th>*/}
                            </tr>
                            </thead>
                            <tbody>
                            {table.map((item, index)=>{
                                return(
                                    <tr key = {index}>
                                        <td>{index+1}</td>
                                        <td>{item.time}</td>
                                        <td>{item.name}</td>
                                        <td>{item.area}</td>
                                        <td>{item.competition}</td>
                                        <td>{item.reward}</td>
                                        {/*<td>{item.remark}</td>*/}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>

                    </div>

                    <Footer/>
                </div>
            </div>

        )
    }
}
export const Place = withRouter(PlaceReact)