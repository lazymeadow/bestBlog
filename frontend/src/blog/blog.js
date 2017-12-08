class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name: ''
        };
    }

    componentDidMount() {
        $.get(`/api/blog/${this.props.id}`)
            .done(this._updateBlogData.bind(this));
        $.get(`/api/blog/${this.props.id}/post`)
            .done(this._updatePostsData.bind(this));
    }

    render() {
        return (<div>
            <h1>{this.state.name}</h1>
            {this.state.posts.map((post) => <Post key={post.id} {...post}/>)}
        </div>);
    }

    _updatePostsData({data: posts}) {
        this.setState({posts});
    }

    _updateBlogData({data: {name}}) {
        this.setState({name});
    }
}
