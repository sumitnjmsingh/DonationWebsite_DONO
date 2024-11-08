import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app=express();
import cors from "cors"
import cookieParser from "cookie-parser"

// app.use(express.json());


const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'
import medicalRouter from './routes/medical.routes.js';
app.use("/api/medical", medicalRouter);


app.use("/api/users", userRouter)

export { app }
