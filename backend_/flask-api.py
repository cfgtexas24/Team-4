# import json
# import uuid
# from flask import Flask, render_template, redirect, url_for, request
# from flask_uuid import FlaskUUID
# from firebase import db
# from flask_cors import CORS

# app = Flask(__name__)
# FlaskUUID(app)
# CORS(app)
# # name, location, gender, age, phone, email, housing request

# # Landing Page (Redirects to /home)
# @app.route('/')
# def landing():
#     return redirect(url_for('home'))

# # Home Page
# @app.route('/home')
# def home():
#     return "home"
#     # return render_template('home.html')

# # Resources Page
# @app.route('/resources')
# def resources():
#     return render_template('resources.html')

# # Sign In Page
# @app.route('/sign-in', methods=['GET', 'POST'])
# def sign_in():
#     if request.method == 'POST':
#         # Add validation logic here
#         return redirect(url_for('dashboard'))
#     return render_template('sign_in.html')

# # Sign Up Page
# @app.route('/sign-up', methods=['GET', 'POST'])
# def sign_up():
#     if request.method == 'POST':
#         data = request.json
    
#         # Extract user information
#         user_id = str(uuid.uuid4())
#         name = data.get('name')
#         location = data.get('location')
#         gender = data.get('gender')
#         age = data.get('age')
#         phone = data.get('phone')
#         email = data.get('email')
#         housing_request = data.get('housing_request')
            
#         # Save to Firestore
#         db.collection('users').document(user_id).set({
#             'uuid': user_id,
#             'name': name,
#             'location': location,
#             'gender': gender,
#             'age': age,
#             'phone': phone,
#             'email': email,
#             'housing_request': housing_request,
#             'points': "0"
#         })

#         # return redirect(url_for('dashboard'))
#         return "redirected"
    
#     # return render_template('sign_up.html')
#     return "did not redirect"
    

# # Mentor Page
# @app.route('/mentor')
# def mentor():
#     return render_template('mentor.html')

# # Community Page
# @app.route('/community')
# def community():
#     return render_template('community.html')

# @app.route('/community/programming-community')
# def programming_community():
#     return render_template('programming_community.html')

# # Courses Page
# @app.route('/courses')
# def courses():
#     return render_template('courses.html') 

# @app.route('/courses/finance')
# def finance_course():
#     return render_template('finance_course.html') 

# # Dashboard Page
# @app.route('/dashboard')
# def dashboard():
#     return render_template('dashboard.html')

# if __name__ == '__main__':
#     app.run(debug=True)

import json
import uuid
from flask import Flask, make_response, render_template, redirect, url_for, request, jsonify
from flask_uuid import FlaskUUID
from rich import _console
from firebase import db
from services.emergency_service import emergency_service
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # enabling CORS for routes, needed for emergency alert
FlaskUUID(app)
# name, location, gender, age, phone, email, housing request

# Landing Page (Redirects to /home)
@app.route('/')
def landing():
    return redirect(url_for('home'))

# Home Page
@app.route('/home')
def home():
    return render_template('home.html')

# Resources Page
@app.route('/resources')
def resources():
    return render_template('resources.html')

# Sign In Page
@app.route('/sign-in', methods=['GET', 'POST'])
def sign_in():
    response = make_response(jsonify(message="Success!"), 200)
    if request.method == 'POST':
        email = request.json['email']
        users_ref = db.collection('users')
        user = users_ref.where('email', '==', email).limit(1).get()
        if not user:
            response = make_response(jsonify(message="User not found"), 404)
            return response
        return response
    return response

# Sign Up Page
@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        data = request.json
    
        # Extract user information
        user_id = str(uuid.uuid4())
        name = data.get('name')
        location = data.get('location')
        gender = data.get('gender')
        age = data.get('age')
        phone = data.get('phone')
        email = data.get('email')
        housing_request = data.get('housing_request')
            
        # Save to Firestore
        db.collection('users').document(user_id).set({
            'uuid': user_id,
            'name': name,
            'location': location,
            'gender': gender,
            'age': age,
            'phone': phone,
            'email': email,
            'housing_request': housing_request,
            'points': "0"
        })

        # return redirect(url_for('dashboard'))
        # set response status code to 201
        response = make_response(jsonify(message="Success!"), 200)
        return response
    
    # return render_template('sign_up.html')
    response = make_response(jsonify(message="Not Success..."), 400)
    return response
    

# Mentor Page
@app.route('/mentor')
def mentor():
    return render_template('mentor.html')

# Community Page
@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/community/programming-community')
def programming_community():
    return render_template('programming_community.html')

# Courses Page
@app.route('/courses')
def courses():
    return render_template('courses.html') 

@app.route('/courses/finance')
def finance_course():
    return render_template('finance_course.html') 

# Dashboard Page
@app.route('/dashboard')
def dashboard():
    return "dashboard"
    # return render_template('dashboard.html')

# Emergency Alert Route
@app.route('/api/send-emergency-alert', methods=['POST'])
def send_emergency_alert():
    try:
        data = request.json
        message = data.get('message')
        if not message:
            return jsonify({"error": "Message is required"}), 400

        result = emergency_service.send_emergency_alert(message)
        app.logger.debug(f"Emergency alert result: {result}")
        return jsonify({"message": "Emergency alert sent successfully"}), 200
    except Exception as e:
        app.logger.error(f"Error in emergency alert route: {str(e)}")
        return jsonify({"error": "Failed to send emergency alert"}), 500

if __name__ == '__main__':
    app.run(debug=True)