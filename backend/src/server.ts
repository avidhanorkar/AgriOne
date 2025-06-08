import express, { Express } from "express";
import { PORT } from "./config/config";
import connectDB from "./db/db";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";

const app: Express = express();
const port = PORT;
app.use(express.json());

app.listen(port, (): void => {
    console.log(`The server is started at: ${port}`)
})
connectDB();
app.use('/app/v1/auth', authRouter);
app.use('/app/v1/user', userRouter);
