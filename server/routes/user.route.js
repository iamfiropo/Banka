import express from 'express';
import userController from '../controllers/user.controller';

const userRoute = express.Router();

userRoute.post('/auth/signup', userController.addUser);

export default userRoute;
