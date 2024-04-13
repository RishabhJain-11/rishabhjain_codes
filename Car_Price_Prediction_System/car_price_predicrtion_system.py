# -*- coding: utf-8 -*-
"""Car_Price_Predicrtion_System.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/17-sX2HF93VLbck6_4etKFNU5-KxZjyg6
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import scipy as sp
import sklearn as sk
import tensorflow as tf
import keras as kr
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Lasso
from sklearn import metrics
from sklearn.linear_model import LinearRegression

d = pd.read_csv("car data.csv")
d.head()

d.shape

print(d.Fuel_Type.value_counts())
print(d.Seller_Type.value_counts())
print(d.Transmission.value_counts())

d.replace({"Fuel_Type":{'Petrol':0,'Diesel':1,'CNG':2}}, inplace = True)
d.replace({"Seller_Type":{'Dealer':0,'Individual':1}}, inplace = True)
d.replace({"Transmission":{'Manual':0,'Automatic':1}}, inplace = True)

d.head()

X = d.drop(['Car_Name', 'Selling_Price'],axis=1)
y = d['Selling_Price']
print(X)
print(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 2)

model = LinearRegression()
model.fit(X_train, y_train)

prediction_train = model.predict(X_train)
# print(prediction_train)
error_score = metrics.r2_score(y_train, prediction_train)
print("R Squared Error : ", error_score)

# prompt: show the difference between training data and predicted data using a scatter plot and show them in different colors alongwith Labels.

plt.scatter(y_train, prediction_train, color='blue', label="Training Predicted Data")
plt.scatter(y_test, model.predict(X_test), color='red', label="Testing Predicted Data")
plt.legend()
plt.show()

pred_test = model.predict(X_test)
error_score = metrics.r2_score(y_test, pred_test)
print("R Squared Error : ", error_score)

# prompt: show the difference between training data and predicted data using a scatter plot and show them in different colors alongwith Labels.

import matplotlib.pyplot as plt

# plt.scatter(y_train, prediction_train, color='blue', label="Training Data")
plt.scatter(y_test, pred_test, color='red', label="Predicted Data")
plt.legend()
plt.show()

lass_model = Lasso()
lass_model.fit(X_train, y_train)

training_data_prediction = lass_model.predict(X_train)

error_score = metrics.r2_score(y_train, training_data_prediction)
print("R Squared Error: ", error_score)

import matplotlib.pyplot as plt

plt.scatter(y_train, prediction_train, color='blue', label="Training Data")
plt.scatter(y_test, pred_test, color='red', label="Predicted Data")
plt.legend()
plt.show()

test_data_prediction = lass_model.predict(X_test)

error_score = metrics.r2_score(y_test, test_data_prediction)
print("R squared Error : ", error_score)

plt.scatter(y_test, test_data_prediction)
plt.xlabel("Actual Price")
plt.ylabel("Predicted Price")
plt.title(" Actual Prices vs Predicted Prices")
plt.show()
