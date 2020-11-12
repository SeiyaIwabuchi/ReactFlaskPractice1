from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime
import datetime
from sqlalchemy.orm import sessionmaker
from.MemoData import MemoData

engine=create_engine("mysql://docker:docker@192.168.1.124:3306/test_database")
Base=declarative_base()
Base.metadata.create_all(engine)
SessionClass=sessionmaker(engine) #セッションを作るクラスを作成
session=SessionClass()

def clearAll():
    #データクリア
    for r in session.query(MemoData).all():
        session.delete(r)
        session.commit()

def insertOne(memoData:MemoData):
    session.add(MemoData(title=memoData.title,body=memoData.body,datetime=memoData.datetime))

def getAll(memoData:MemoData):
    return session.query(MemoData).all()

def deleteOne(memoData:MemoData):
    session.delete(memoData)
    session.commit()