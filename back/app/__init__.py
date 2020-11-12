""" app/__init__.py """
from flask import Flask, render_template
from flask_cors import CORS
from .view.create import mod_create
from .view.update import mod_update
# Define the WSGI application object
app = Flask(__name__)
CORS(app)
app.register_blueprint(mod_create)
app.register_blueprint(mod_update)