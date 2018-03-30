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
        if (this.props.comments.length === 0) {
            return <em>No comments!</em>;
        }
        else {
            let commentMessage = (<em onClick={this.showComments}>
                {this.state.hidden ? 'Show' : 'Hide'} {this.props.comments.length} comments
            </em>);
            let renderingContent;
            if (!this.state.hidden) {
                renderingContent = this.props.comments.map((comment) => <Comment key={comment.id} {...comment}/>);
            }

            return (<div>
                {commentMessage}
                {renderingContent}
            </div>);
        }
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