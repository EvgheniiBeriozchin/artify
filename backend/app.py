from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from datetime import datetime
from components.PerformancePage import performance_page 
from components.PerformancePage import db,ma

app = Flask(__name__)
app.register_blueprint(performance_page)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/artify'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.app = app
db.init_app(app)
ma.init_app(app)

db.create_all()

if __name__ == '__main__':
    app.run(debug=True)