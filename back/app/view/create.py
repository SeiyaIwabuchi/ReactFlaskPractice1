from app.debug.Debug import Debug
from app.model import DAO
from datetime import datetime
from app.model.MemoData import MemoData
from flask import Flask,Blueprint,request
from json import loads

mod_create = Blueprint("create",__name__)

@mod_create.route('/',methods=["POST"])
def index():
    json = loads(request.data.decode("UTF-8"))
    nextMemoId = DAO.getNextMemoId(MemoData.user == json["uid"])
    nextMemoId = 0 if nextMemoId == None else nextMemoId[0]+1
    memo = MemoData(
        user=json["uid"],
        id=nextMemoId,
        title=json["title"],
        body=json["body"],
        datetime=datetime.now()
        )
    Debug.log(DAO.getNextMemoId(MemoData.user == json["uid"]))
    DAO.insertOne(memo)
    return ""