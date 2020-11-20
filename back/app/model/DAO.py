from app.debug.Debug import Debug
from sqlalchemy import create_engine,func
import sqlalchemy
from sqlalchemy.exc import ProgrammingError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String, DateTime
import datetime
from sqlalchemy.orm import sessionmaker
from.MemoData import MemoData
import inspect
from .infosTable import infosTable
import logging

logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

engine=create_engine("mysql://docker:docker@192.168.1.124:3306/test_database?charset=utf8")
Base=declarative_base()
Base.metadata.create_all(bind=engine, checkfirst=False)
SessionClass=sessionmaker(engine) #セッションを作るクラスを作成

class MySessionClass():
    def __init__(self,session):
        self.session = session

    def __enter__(self):
        return self.session
    
    def __exit__(self, ex_type, ex_value, trace):
        self.session.close()

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

def getAll(filter):
    with MySessionClass(SessionClass()) as session:
        data = session.query(MemoData).filter(filter).all()
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

def getOne(filter,filter2) -> MemoData:
    with MySessionClass(SessionClass()) as session:
        memo = session.query(MemoData).filter(filter,filter2).first()
    return memo

def getNextUserId() -> String:
    with MySessionClass(SessionClass()) as session:
        nextId = session.query(infosTable).filter(infosTable.keyName == "nextUserId").first().value
    return nextId

def incrementUserId():
    with MySessionClass(SessionClass()) as session:
        nextId = session.query(infosTable).filter(infosTable.keyName == "nextUserId").first()
        nextId.value = str(int(nextId.value)+1)
        session.commit()
    return nextId

def getNextMemoId(filter):
    """
    select max(memoId)
    from memoDataTable
    where userId = userId
    group by userId
    """
    with MySessionClass(SessionClass()) as session:
        data = session.query(func.max(MemoData.id)).group_by(MemoData.user).filter(filter).first()
    return data