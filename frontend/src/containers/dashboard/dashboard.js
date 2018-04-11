import * as React from "react";
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loggedIn) {
            return (<h5>✨MAGIC✨</h5>);
        }

        return (
            <Redirect to={{
                pathname: '/login'
            }}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));