from datetime import date
from json import loads
from flask import request
import datetime
from flask.wrappers import Request
from .UserIdManager import UserIdManager
from app.debug.Debug import *

class Session:
    """セッション管理をするクラス"""
    def __init__(self,request:Request):
        if request.args.get("uid") != "":
            self.uid = request.args.get("uid")
        else:
            self.uid = UserIdManager.getNextId()