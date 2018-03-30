import * as React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h5>✨MAGIC✨</h5>);
    }
}


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));