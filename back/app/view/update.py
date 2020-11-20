from app.debug.Debug import Debug
from app.model import DAO
from datetime import datetime
from app.model.MemoData import MemoData
from flask import Flask,Blueprint,request
from json import loads

mod_update = Blueprint("update",__name__)

@mod_update.route('/',methods=["PUT"])
def index():
    json = loads(request.data.decode("UTF-8"))
    memo = MemoData(
        user=json["uid"],
        id=json["id"],
        title=json["title"],
        body=json["body"],
        datetime=datetime.now()
        )
    DAO.updateOne(memo)
    return ""