from flask import Flask, render_template, flash, request, redirect, url_for, session
import json

app = Flask(__name__)

@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return render_template('index.html')

@app.route('/signin' , methods = ['GET' , 'POST'])
def signin():
    return render_template('signin.html')

@app.route('/signup' , methods = ['GET' , 'POST'])
def signup():
    return render_template('signup.html')

if __name__ == "__main__":
    app.run(debug=True)
