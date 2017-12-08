from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

frontend_blueprint = Blueprint('frontend', __name__,
                               template_folder='templates',
                               static_folder='src')


@frontend_blueprint.route('/')
def show():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)
