import $ from 'jquery';

export default class BlogService {
    static getBlog(blog_id) {
        return $.get(`/api/blog/${blog_id}`);
    }

    static getPostsForBlog(blog_id) {
        return $.get(`/api/blog/${blog_id}/posts`);
    }

    static getPost( post_id) {
        return $.get(`/api/post/${post_id}`);
    }

    static getCommentsForPost(post_id) {
        return $.get(`/api/post/${post_id}/comments`);
    }

    static getComment(comment_id) {
        return $.get(`/api/comment/${comment_id}`);
    }
}