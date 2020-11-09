""" app/__init__.py """

from flask import Flask, render_template
from app.view.index import mod_index
from app.view.update import mod_update
from flask_cors import CORS
# Define the WSGI application object
app = Flask(__name__)
CORS(app)
app.register_blueprint(mod_index)
app.register_blueprint(mod_update)