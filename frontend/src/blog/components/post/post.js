class Post extends React.Component {
    render() {
        return (<div>
            <h1>{this.props.title}</h1>
            <em>{this.props.created.toDateString()}</em>
            <p>{this.props.content}</p>
            </div>);
    }
}