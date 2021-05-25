from flask import Flask, render_template, flash, request, redirect, url_for, session
import json
import requests


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

@app.route('/profile' , methods = ['GET' , 'POST'])
def profile():
    return render_template('profile.html')

@app.route('/submit' , methods = ['GET' , 'POST'])
def submit():
    return render_template('submit.html')

@app.route('/jar-one' , methods = ['GET' , 'POST'])
def jar1():
    return render_template('jar1.html')

@app.route('/jar-two' , methods = ['GET' , 'POST'])
def jar2():
    return render_template('jar2.html')

@app.route('/jar-three' , methods = ['GET' , 'POST'])
def jar3():
    return render_template('jar3.html')

@app.route('/jar-four' , methods = ['GET' , 'POST'])
def jar4():
    return render_template('jar4.html')


@app.route('/jar-five' , methods = ['GET' , 'POST'])
def jar5():
    return render_template('jar5.html')

@app.route('/sendNote' , methods = ['GET' , 'POST'])
def sendNote():
    return render_template('sendNote.html')

@app.route('/verifyNote' , methods = ['GET' , 'POST'])
def verifyNote():
    note = ""
    if request.method == 'POST':
        note = request.form['note']
        print(note)
        return render_template('verifyNote.html' , note = note)
    return render_template('verifyNote.html' , note = note)

if __name__ == "__main__":
    app.run(debug=True)
