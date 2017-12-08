const Blog = (props) => {
    return (<div>
        {props.posts.map((post) => <Post key={post.id} {...post}/>)}
    </div>);
};
