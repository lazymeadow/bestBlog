from flask import Blueprint, render_template, abort, make_response, jsonify, request
from jinja2 import TemplateNotFound

api_blueprint = Blueprint('api_blueprint', __name__,
                          template_folder='./templates')


@api_blueprint.route('/', methods=['GET'])
def show():
    return make_response(jsonify({'face': 'foot'}))


@api_blueprint.route('/login', methods=['POST'])
def post_login():
    if 'username' in request.form.keys() and 'password' in request.form.keys() and request.form[
        'username'] == 'face' and request.form['password'] == 'foot123':
        return _dang_response_generator({'success': True})
    return _dang_response_generator({'error': 'Invalid credentials'}, 401)


@api_blueprint.route('/blog/<int:blog_id>', methods=['GET'])
def get_blog(blog_id):
    return _dang_response_generator({'name': 'best ever blog for realsies'})


@api_blueprint.route('/blog/<int:blog_id>/posts', methods=['GET'])
def all_posts(blog_id):
    return _dang_response_generator([
        {
            'id': 1,
            'title': 'Best ever post',
            'content': 'so much content omg so much',
            'author': 'audrey',
            'created': '1/1/17',
            'comment_count': 2
        },
        {
            'id': 2,
            'title': 'Less great post',
            'content': 'pretty lame',
            'author': 'audrey',
            'created': '1/2/17',
            'comment_count': 23
        }
    ])


@api_blueprint.route('/blog/<int:blog_id>/posts', methods=['POST'])
def create_post(blog_id):
    print 'okey doke'
    return 'nope'


@api_blueprint.route('/post/<int:post_id>', methods=['GET'])
def get_post(post_id):
    print post_id
    return 'nopety nope'


@api_blueprint.route('/post/<int:post_id>/comments', methods=['GET'])
def get_comments(post_id):
    if post_id == 1:
        return _dang_response_generator([
            {
                'id': 1,
                'content': 'commmmmmmmmennnnnnnnnt',
                'created': '1/3/17'
            },
            {
                'id': 2,
                'content': 'butts butts butts',
                'created': '1/3/17'
            }
        ])
    return _dang_response_generator([])


def _dang_response_generator(data, response_code=200):
    return make_response(jsonify({'data': data}), response_code)
