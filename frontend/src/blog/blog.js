import * as React from 'react';

import BlogService from "./services/blog_service";
import Post from "./components/post/post";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name: ''
        };
    }

    componentDidMount() {
        BlogService.getBlog(this.props.id)
            .done(this._updateBlogData.bind(this));
        BlogService.getPostsForBlog(this.props.id)
            .done(this._updatePostsData.bind(this));
    }

    render() {
        return (<div>
            <h1>{this.state.name}</h1>
            <img src='../assets/sample_shiba_inu.bmp'/>
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
