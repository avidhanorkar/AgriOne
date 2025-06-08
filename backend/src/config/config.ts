import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT
export const MongoDB = process.env.MongoDB as string;  
export const JWT_SECRET = process.env.JWT_SECRET as string;