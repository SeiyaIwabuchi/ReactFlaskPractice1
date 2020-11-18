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
import inspect

engine=create_engine("mysql://docker:docker@192.168.1.124:3306/test_database?charset=utf8")
Base=declarative_base()
Base.metadata.create_all(bind=engine, checkfirst=False)
SessionClass=sessionmaker(engine) #セッションを作るクラスを作成

class MySessionClass():
    def __init__(self,session):
        self.session = session

    def __enter__(self):
        Debug.log("Connect to Database.")
        return self.session
    
    def __exit__(self, ex_type, ex_value, trace):
        self.session.close()
        Debug.log("Close Database session.")

with MySessionClass(SessionClass()) as session:
    Debug.log("Connected to Database.")

def clearAll():
    #データクリア
    with MySessionClass(SessionClass()) as session:
        for r in session.Session.query(MemoData).all():
            session.delete(r)
        session.commit()

def insertOne(memoData:MemoData):
    with MySessionClass(SessionClass()) as session:
        session.add(memoData)
        try:
            session.commit()
        except ProgrammingError:
            pass

def getAll():
    with MySessionClass(SessionClass()) as session:
        data = session.query(MemoData).all()
    return data

def deleteOne(memoData:MemoData):
    with MySessionClass(SessionClass()) as session:
        session.delete(memoData)
        session.commit()

def updateOne(memoData:MemoData):
    with MySessionClass(SessionClass()) as session:
        oldData:MemoData = session.query(MemoData).filter(MemoData.id==memoData.id).first()
        Debug.log(oldData.toDict())
        Debug.log(memoData.toDict())
        oldData.title = memoData.title
        oldData.body = memoData.body
        session.commit()