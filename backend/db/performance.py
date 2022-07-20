from datetime import datetime

from db.main import db, ma

class Performance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text())
    #artType = db.Column(db.Enum(MyEnum))
    #artType = db.Column(db.Integer)
    #address = db.Column(db.Text())
    #link = db.Column(db.Text)
    body = db.Column(db.Text)
    date = db.Column(db.DateTime, default=datetime.now())

    
    def __init__(self, title, body):
        self.title = title
        self.body = body
        #self.artType = artType
        #self.address = address
        #self.link = link
        #self.artType = artType


class PerformanceSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'date')
        #fields = ('id', 'title', 'artType', 'address', 'link', 'date')


performance_schema = PerformanceSchema(many=True)