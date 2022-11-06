import json
from flask import Flask, request, jsonify

app = Flask(__name__)


def translate_sentence(sentence='', target_language=''):
    return "this project was wonderful"


@app.route('/', methods=['GET', 'POST'])
def get_translation():
    # some code
    if request.method == 'POST':
        posted_data = request.get_json()
        data = posted_data['data']
        print(data)
    return translate_sentence()


@app.route('/person/')
def hello():
    return jsonify({'name': 'Jimit',
                    'address': 'India'})


if __name__ == '__main__':
    app.run(debug=True)