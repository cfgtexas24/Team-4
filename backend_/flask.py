import json
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)
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
    if request.method == 'POST':
        # Add validation logic here
        return redirect(url_for('dashboard'))
    return render_template('sign_in.html')

# Sign Up Page
@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        # Add logic for user creation
        return redirect(url_for('dashboard'))
    return render_template('sign_up.html')

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
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
