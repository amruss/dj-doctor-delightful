from flask import Flask, send_file, session, redirect, url_for, escape, request
from colorRouter import routeScripts
import json

app = Flask(__name__)

@app.route("/")
def index():
    return send_file("templates/index.html")

@app.route('/getScript', methods=['POST', 'GET'])
def giveColors():
    data = {}
    data['color_arrays'] = routeScripts(1)
    json_data = json.dumps(data)
    return json_data;

#Uploader for photos
""""
@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST' and text in request.files:
        filename = photos.save(request.files['photo'])
        rec = ..(filename=filename, user=g.user.id)
        rec.store()
        flash("Photo saved.")
        return redirect(url_for('show', id=rec.id))
    return render_template('upload.html')
"""
if __name__ == "__main__":
    app.run(host='0.0.0.0')
