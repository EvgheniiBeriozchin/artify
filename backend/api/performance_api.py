from flask import jsonify, request, Blueprint

from db.performance import Performance, performance_schema
from db.main import db

performance = Blueprint("performance", __name__)

@performance.route('/get', methods=['GET'])
def get_articles():
    all_articles = Performance.query.all()
    results = performance_schema.dump(all_articles)
    return jsonify(results) 


@performance.route('/<id>', methods = ['GET'])
def performance_details(id):
    article = Performance.query.get(id)
    return performance_schema.jsonify([article])    


@performance.route('/post', methods=['POST'])
def add_article():
    title = request.json['title']
    address = request.json['address']
    link = request.json['link']
    art_type = request.json['artType']
    
    articles = Performance(title, address, link, art_type)
    db.session.add(articles)
    db.session.commit()
    return performance_schema.jsonify(articles)
