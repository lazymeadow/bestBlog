from flask import Flask

from backend.api import api_blueprint
from backend.lib import mysql
from frontend.blog import frontend_blueprint

app = Flask(__name__)
app.register_blueprint(frontend_blueprint)
app.register_blueprint(api_blueprint, url_prefix='/api')

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'bestblog'

mysql.init_app(app)

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
