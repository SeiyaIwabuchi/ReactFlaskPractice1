from flask import Flask,Blueprint,request

mod_create = Blueprint("create",__name__)

@mod_create.route('/',methods=["POST"])
def index():
    print(request.json)
    return ""