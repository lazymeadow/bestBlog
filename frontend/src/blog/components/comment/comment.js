import * as React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
        this.showComments = this.showComments.bind(this);
    }

    render() {
        let rendering_content = [<em onClick={this.showComments}>
            {this.state.hidden ? 'Show' : 'Hide'} {this.props.comments.length} comments
        </em>];

        if (!this.state.hidden) {
            rendering_content.push(this.props.comments.map((comment) => <Comment key={comment.id} {...comment} />));
        }

        return <div>{rendering_content}</div>;
    }

    showComments() {
        this.setState(prevState => ({
            hidden: !prevState.hidden
        }));
    }
}

const Comment = (props) => {
    return (<div>
        <p>{props.content}</p>
        <em>{props.created}</em>
    </div>);
};