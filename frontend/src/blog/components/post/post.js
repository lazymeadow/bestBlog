import * as React from 'react';
import BlogService from "../../services/blog_service";
import Comments from "../comment/comment";


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        BlogService.getCommentsForPost(this.props.id)
            .done(this._updateCommentData.bind(this));
    }

    render() {
        return (<div className="blog-post">
            <h1>{this.props.title}</h1>
            <em>{this.props.author} on {this.props.created}</em>
            <p>{this.props.content}</p>
            <Comments comments={this.state.comments}/>
        </div>);
    }

    _updateCommentData({data: comments}) {
        this.setState({comments});
    }
}