from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime
Base=declarative_base()

class infosTable(Base):
    __tablename__="infosTable" #テーブル名を指定
    keyName = Column(String(255), primary_key=True)
    value = Column(String(255))

    def toDict(self):
        return {
            "keyName":self.keyName,
            "value":self.value
            }