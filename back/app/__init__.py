""" app/__init__.py """
from flask import Flask, render_template
from flask_cors import CORS
from .view.create import mod_create
from .view.update import mod_update
from .view.getAll import mod_getAll
from .view.delete import mod_delete
# Define the WSGI application object
app = Flask(__name__)
app.secret_key = "seiya"
CORS(app)
app.register_blueprint(mod_create)
app.register_blueprint(mod_update)
app.register_blueprint(mod_getAll)
app.register_blueprint(mod_delete)