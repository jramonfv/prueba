import csv
import pandas as pd
import numpy as np
from numpy import arange

with open('datos.csv', 'r') as archivo:
    lector = csv.reader(archivo)
    for fila in lector:
        print(fila)
a = np.loadtxt('datos.txt', delimiter=';')
for i in a:
    angulo = i[0]
    radio = i[1]



