const express=require('express');
const userController=require('../controller/userController')
const userRoute=express.Router();

userRoute.route('/').get(userController.getUserData).post(userController.CreateNewUser);

userRoute.route('/:id').put(userController.UpdateUser).get(userController.GetUserById);

module.exports=userRoute;