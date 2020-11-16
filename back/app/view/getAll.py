import json
from app.debug.Debug import Debug
from app.model import DAO
from datetime import datetime
from app.model.MemoData import MemoData
from flask import Flask,Blueprint,request,jsonify

mod_getAll = Blueprint("getAll",__name__)

@mod_getAll.route("/getAll")
def index():
    memos = []
    for n in DAO.getAll(MemoData()):
        memos.append(n.toDict())
    j = jsonify(memos)
    return j