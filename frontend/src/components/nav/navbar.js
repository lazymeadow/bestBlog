import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    };
};

const mapDispatchToProps = () => {
    return {};
};


class Navbar extends React.Component {
    render() {
        let authenticationLink = this.props.loggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>;
        return (
            <div>
                <Link to="/">Blog</Link>
                {authenticationLink}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
