from flask import jsonify, request, Blueprint

from db.artist import Artist, artist_schema
from db.main import db

artist = Blueprint("artist", __name__)


@artist.route('/get', methods=['GET'])
def get_artists():
    all_articles = Artist.query.all()
    results = artist_schema.dump(all_articles)
    return jsonify(results)


@artist.route('/<id>', methods=['GET'])
def artist_details(id):
    article = Artist.query.get(id)
    return artist_schema.jsonify([article])


@artist.route('/post', methods=['POST'])
def add_artist():
    name = request.json['name']

    articles = Artist(name)
    db.session.add(articles)
    db.session.commit()
    return artist_schema.jsonify(articles)
