import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class ScrollTopReact extends React.Component {
    static propTypes = {
        // self

        // React Router
        status: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        language: PropTypes.string.isRequired,
        children:PropTypes.object.isRequired,
    };
    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

export const ScrollTop =  withRouter(ScrollTopReact);
