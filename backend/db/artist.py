from db.main import db, ma


class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text())

    def __init__(self, name):
        self.name = name


class ArtistSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')


artist_schema = ArtistSchema(many=True)
