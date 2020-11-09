from flask import Flask,Blueprint

mod_index = Blueprint("index",__name__)

@mod_index.route('/')
def index():
    return "<script>window.location.href='http://localhost:3000'</script>"