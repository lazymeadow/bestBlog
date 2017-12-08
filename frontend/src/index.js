const blog_posts = [
    {
        id: 1,
        title: 'Best ever post',
        content: 'so much content omg so much',
        author: 'audrey',
        created: new Date()
    },
    {
        id: 2,
        title: 'Less great post',
        content: 'pretty lame',
        author: 'audrey',
        created: new Date()
    }
];


$(() => {
    ReactDOM.render(
        <Blog posts={blog_posts} />,
        document.getElementById('content')
    )
});