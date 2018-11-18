import hashlib
import os
import pathlib
from flask import request, Response, send_from_directory
from app import app


@app.route('/upload', methods=['POST'])
def upload():
    f = request.files['file']
    content = f.read()
    hash = hashlib.md5(content).hexdigest()
    path = os.path.join('store', hash[:2])
    pathlib.Path(path).mkdir(parents=True, exist_ok=True)
    f.save(os.path.join(path, hash))
    return Response(hash, mimetype='text/plain'), 200


@app.route('/download', methods=['POST'])
def download():
    hash = request.get_data(as_text=True)
    return send_from_directory(os.path.join('..', 'store', hash[:2]), hash), 200


@app.route('/delete', methods=['POST'])
def delete():
    hash = request.get_data(as_text=True)
    path = os.path.join('store', hash[:2], hash)
    if os.path.isfile(path):
        os.remove(path)
        return Response('success', mimetype='text/plain'), 200
    return Response('not found', mimetype='text/plain'), 404

