from app.debug.Debug import Debug
from app.model import DAO
from datetime import datetime
from app.model.MemoData import MemoData
from flask import Flask,Blueprint,request
from json import loads

mod_delete = Blueprint("delete",__name__)

@mod_delete.route('/',methods=["DELETE"])
def index():
    json = loads(request.data.decode("UTF-8"))
    memo = DAO.getOne(MemoData.id == json["id"])
    DAO.deleteOne(memo)
    return ""