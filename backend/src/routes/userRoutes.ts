import express from 'express';
import { deleteUser, getUser, updateDetails } from '../controllers/user.controller';
import isAuth from '../middleware/auth.middleware';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.patch('/', isAuth, updateDetails);
userRouter.delete('/', isAuth, deleteUser);

export default userRouter; 