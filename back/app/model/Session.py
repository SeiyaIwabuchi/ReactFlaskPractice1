from datetime import date
from json import loads
from flask import request
import datetime
from flask.wrappers import Request
from . import UserIdManager
from app.debug.Debug import *

class Session:
    """セッション管理をするクラス"""
    def __init__(self,request:Request):
        json = loads(request.data.decode("UTF-8"))
        try:
            self.uid = int(json["uid"])
        except KeyError:
            self.uid = UserIdManager.getNextId()