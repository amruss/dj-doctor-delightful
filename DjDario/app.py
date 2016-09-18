from flask import Flask, send_file, session, redirect, url_for, escape, request
from colorRouter import routeScripts
import json
from writeUserCode import writePythonScript

app = Flask(__name__)

@app.route("/")
def index():
    return send_file("templates/index.html")

@app.route('/getScript', methods=['POST'])
def giveColors():
    #jData= request.get_json() TODO- choose which alg
    data = {}
    data['color_arrays'] = routeScripts(2)
    json_data = json.dumps(data)
    return json_data;


@app.route('/upload', methods=['POST'])
def upload():
    jsonData= request.get_json()
    writePythonScript(jsonData['text_input'])
    return "posted"


if __name__ == "__main__":
    app.run(host='0.0.0.0')
