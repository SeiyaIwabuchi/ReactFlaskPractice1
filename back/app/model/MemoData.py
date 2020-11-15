from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime
Base=declarative_base()
class MemoData(Base):
    __tablename__="user" #テーブル名を指定
    id=Column(Integer, primary_key=True)
    title=Column(String(255))
    body=Column(String(255))
    datetime = Column(DateTime())

    def toDict(self):
        return {
            "id":self.id,
            "title":self.title,
            "body":self.body,
            "datetime":str(self.datetime)
            }