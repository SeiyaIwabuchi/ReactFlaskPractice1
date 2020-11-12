from flask import Flask,Blueprint

mod_create = Blueprint("create",__name__)

@mod_create.route('/',methods=["POST"])
def index():
    return ""