from flask import Flask, render_template, request
import json
import numpy as np


app = Flask(__name__)
@app.route('/')
def sonar():
    
    return render_template('index.html')

@app.route("/sonar", methods=['GET'])
def sonar_post():
  
    angulo =[]
    radio = []
    a = np.loadtxt('datos.txt', delimiter=';')
    for i in a:
        radio.append(i[0])
        angulo.append(i[1]) 
    line = json.dumps((angulo,radio))
    
    return line


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=3000, debug=True)