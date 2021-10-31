from flask import Flask, render_template, flash, request, redirect, url_for, session
import json
import requests


app = Flask(__name__)

@app.route('/' , methods = ['GET' , 'POST'])
def index():
    return ('Hello World!')


if __name__ == "__main__":
    app.run(debug=True)
