import  Express  from "express";
import userRoutes from "./routes/users.js";
import coursesRoutes from "./routes/courses.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = Express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next();
});

app.use(cors("http://localhost:5173"))
app.use(Express.json())
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/courses",coursesRoutes)
app.use("/api/auth",authRoutes)


app.listen(8800, ()=>{
    console.log("API working!")
})