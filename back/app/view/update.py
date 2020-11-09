from datetime import date
from flask import Flask,Blueprint
import datetime

from flask.wrappers import Response

mod_update = Blueprint("update",__name__)

@mod_update.route('/update')
def index():
    return str(datetime.datetime.now())