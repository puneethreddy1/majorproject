import pickle
import numpy as np
from flask import Flask
from flask_restful import Api,Resource,reqparse
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
#Pre trained ML models

voting_avg = pickle.load(open("pre_trained_models/voting_avg.pkl", 'rb'))
voting_hard=pickle.load(open("pre_trained_models/voting_hard.pkl",'rb'))
voting_wt=pickle.load(open("pre_trained_models/voting_wt.pkl",'rb'))

# def Predictor(input_data):
#   v1=voting_avg.predict(input_data)
#   v2=voting_hard.predict(input_data)
#   v3=voting_wt.predict(input_data)
#   print(v1,v2,v3)
#   if v1+v2+v3 >=2:
#     return 1
#   else:
#     return 0
  
  
# ml_put_args=reqparse.RequestParser()
# ml_put_args.add_argument("bp",type=int)
# ml_put_args.add_argument("chol",type=int)
# ml_put_args.add_argument("bmi",type=int)
# ml_put_args.add_argument("smoker",type=int)
# ml_put_args.add_argument("heart",type=int)
# ml_put_args.add_argument("phy",type=int)
# ml_put_args.add_argument("alcohol",type=int)
# ml_put_args.add_argument("genhlth",type=int)
# ml_put_args.add_argument("menthlth",type=int)
# ml_put_args.add_argument("phyhlth",type=int)
# ml_put_args.add_argument("diffwalk",type=int)
# ml_put_args.add_argument("sex",type=int)
# ml_put_args.add_argument("age",type=int)


# app =Flask(__name__)
# api=Api(app)
# class MachineLearning(Resource):
#     def get(self):
#         return {"data":"hello"}
#     def post(self):
#        args=ml_put_args.parse_args()
#        d=[]
#        for key in args:
#           d.append(args[key])
#        arr=np.asarray(d)
#        arr=arr.reshape(1,-1)
#        predicted_value=Predictor(arr)
#        return {"data":"This is post request","Prediction":predicted_value}
# api.add_resource(MachineLearning,"/")
# if __name__=="__main__":
#     app.run(debug=True)


  

#THESE ARE EXAMPLES TO CHECK IF EVERYTHING IS WORKING FINE

# data=(1,1,40,1,0,0,1,5,18,15,1,0,9)
# arr=np.asarray(data)
# arr_false=arr.reshape(1,-1)
# data1=(1,1,30,1,1,0,0,5,30,30,1,0,9)
# arr1=np.asarray(data1)
# arr_true=arr1.reshape(1,-1)
# print(Predictor(arr_false))
# print(Predictor(arr_true))

df=pd.read_csv('C:/CODES/MAJORPROJECT/diabetes_012_health_indicators_BRFSS2015.csv')
smaller_df=df.loc[:,['Diabetes_012','HighBP', 'HighChol', 'BMI','Smoker', 'HeartDiseaseorAttack','PhysActivity','HvyAlcoholConsump', 'GenHlth','MentHlth','PhysHlth','DiffWalk','Sex','Age']]
#print(smaller_df.head(10))
corr = smaller_df.corr()
fig, ax = plt.subplots(figsize=(25,15)) 
sns.heatmap(corr,annot=True, cmap = "Blues", linewidth = 0.30)
plt.title("Correlation matrix of features")
plt.show()