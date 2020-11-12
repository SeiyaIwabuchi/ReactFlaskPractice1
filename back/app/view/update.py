from flask import Flask,Blueprint

mod_update = Blueprint("update",__name__)

@mod_update.route('/')
def index():
    return "<script>window.location.href='http://localhost:3000'</script>"