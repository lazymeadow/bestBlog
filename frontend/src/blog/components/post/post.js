class Post extends React.Component {
    render() {
        return (<div className="blog-post">
            <h1>{this.props.title}</h1>
            <em>{this.props.author} on {this.props.created}</em>
            <p>{this.props.content}</p>
            <em>{this.props.comment_count} comments</em>
            <Comments />
            </div>);
    }
}