import json
from flask import Flask, request, jsonify

app = Flask(__name__)
# name, location, gender, age, phone, email, housing request