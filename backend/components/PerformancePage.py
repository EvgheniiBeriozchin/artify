from flask import Flask, jsonify, request, Blueprint
from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy_utils import URLType
from flask_marshmallow import Marshmallow

from datetime import datetime
import enum

db = SQLAlchemy()
ma = Marshmallow()

#class MyEnum(enum.Enum):
#    musician = 1
#    performer = 2
#    streetArt = 3


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text())
    #artType = db.Column(db.Enum(MyEnum))
    artType = db.Column(db.Integer)
    address = db.Column(db.Text())
    link = db.Column(db.Text)
    date = db.Column(db.DateTime, default=datetime.now())

    
    def __init__(self, title, address, link, artType):
        self.title = title
        self.artType = artType
        self.address = address
        self.link = link
        self.artType = artType


class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'artType', 'address', 'link', 'date')


article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


performance_page = Blueprint("performance_page", __name__)

@performance_page.route('/get', methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results) 


@performance_page.route('/<id>', methods = ['GET'])
def performance_details(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)    


@performance_page.route('/post', methods=['POST'])
def add_article():
    title = request.json['title']
    artType = request.json['artType']
    address = request.json['address']
    link = request.json['link']
    artType = request.json['artType']

    articles = Articles(title, address, link, artType)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)
