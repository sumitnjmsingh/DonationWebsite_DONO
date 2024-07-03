import express from "express"
const app=express();
import cors from "cors"
import cookieParser from "cookie-parser"

// app.use(express.json());


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
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


app.use("/api/users", userRouter)

export { app }
