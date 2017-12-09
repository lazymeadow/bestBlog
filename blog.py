import os
from flask import Flask
from flask_assets import Environment
from webassets import Bundle
from webassets.filter import get_filter

from backend.api import api_blueprint
from frontend.blog import frontend_blueprint

app = Flask(__name__)
app.register_blueprint(frontend_blueprint)
app.register_blueprint(api_blueprint, url_prefix='/api')

# assets = Environment(app)
# assets.debug = True
# # app.config['BABEL_BIN'] = 'node_modules\\.bin\\babel'
# app.config['BABEL_PRESETS'] = 'react'
# # app.config['BABEL_EXTRA_ARGS'] = '--source-maps'
# css_bundle = Bundle('frontend/style.less', output='dist/style.css', filters=['less'],
#                     depends=['**/*.less'])
# assets.register('css', css_bundle)
#
# # TODO until I figure out babel and maybe webpack, i'll just list every stupid file
# js_bundle = Bundle('frontend/blog/components/post/post.js',
#                    'frontend/blog/components/comment/comment.js',
#                    'frontend/blog/blog.js',
#                    'frontend/index.js',
#                    output='dist/index.js',
#                    filters=['babel'],
#                    depends=['**/*.js'])
# assets.register('js', js_bundle)

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
