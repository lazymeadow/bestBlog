from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

frontend_blueprint = Blueprint('frontend', __name__,
                               template_folder='templates',
                               static_folder='src',
                               static_url_path='')


# we want all routes to be handled in the javascript. flask will route api for us.
@frontend_blueprint.route('/', methods=['GET'], defaults={'path': ''})
@frontend_blueprint.route('/<path>/', methods=['GET'])
def show(path):
    print path
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)
