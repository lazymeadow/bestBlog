from flask import Blueprint, render_template, abort, make_response, jsonify
from jinja2 import TemplateNotFound

api_blueprint = Blueprint('api_blueprint', __name__,
                               template_folder='./templates')

@api_blueprint.route('/')
def show():
    return make_response(jsonify({'face': 'foot'}))