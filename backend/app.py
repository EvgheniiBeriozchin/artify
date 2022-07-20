from flask import Flask

from db.main import db, ma
from api.performance_api import performance
from .utils import get_db_uri

def init_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = get_db_uri()
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = app
    db.init_app(app)
    ma.init_app(app)

    app.register_blueprint(performance, url_prefix='/performances')
    print(app.url_map)

    return app

def init_db(app):
    with app.app_context():
        db.create_all()

if __name__ == '__main__':
    app = init_app()
    init_db(app)
    app.run(host='0.0.0.0', port=3000, debug=True)