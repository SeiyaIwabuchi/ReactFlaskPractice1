import json
from app.debug.Debug import Debug
from app.model import DAO
from datetime import datetime
from app.model.MemoData import MemoData
from flask import Flask,Blueprint,request,jsonify
from app.model.Session import Session

mod_getAll = Blueprint("getAll",__name__)

@mod_getAll.route("/",methods=["GET"])
def index():
    session = Session(request)
    responseJson = {
        "uid":session.uid,
        "memos":[]
        }
    for n in DAO.getAll(MemoData.user == session.uid):
        responseJson["memos"].append(n.toDict())
    j = jsonify(responseJson)
    return j