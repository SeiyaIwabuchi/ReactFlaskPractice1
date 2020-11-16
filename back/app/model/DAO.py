from app.debug.Debug import Debug
from sqlalchemy import create_engine
import sqlalchemy
from sqlalchemy.exc import ProgrammingError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime
import datetime
from sqlalchemy.orm import sessionmaker
from.MemoData import MemoData

engine=create_engine("mysql://docker:docker@192.168.1.124:3306/test_database?charset=utf8")
Base=declarative_base()
Base.metadata.create_all(bind=engine, checkfirst=False)
SessionClass=sessionmaker(engine) #セッションを作るクラスを作成
session=SessionClass()
Debug.log("Complete database initialize.")

def clearAll():
    #データクリア
    for r in session.query(MemoData).all():
        session.delete(r)
        session.commit()

def insertOne(memoData:MemoData):
    session.add(memoData)
    try:
        session.commit()
    except ProgrammingError as e:
        pass

def getAll(memoData:MemoData):
    return session.query(MemoData).all()

def deleteOne(memoData:MemoData):
    session.delete(memoData)
    session.commit()

def updateOne(memoData:MemoData):
    oldData:MemoData = session.query(MemoData).filter(MemoData.id==memoData.id).first()
    Debug.log(oldData.toDict())
    Debug.log(memoData.toDict())
    oldData.title = memoData.title
    oldData.body = memoData.body
    session.commit()