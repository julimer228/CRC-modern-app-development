import  Express  from "express";
import myCoursesRoutes from "./routes/myCourses.js";
import coursesRoutes from "./routes/courses.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = Express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    res.header('Access-Control-Allow-Origin', 'https://crc-front.vercel.app')
    next();
});

app.use(cors({credentials: true, origin: 'https://crc-front.vercel.app'}));
app.use(Express.urlencoded({extended:false}))
app.use(Express.json())
app.use(cookieParser())
  

app.use("/api/myCourses",myCoursesRoutes)
app.use("/api/courses",coursesRoutes)
app.use("/api/auth",authRoutes)


app.listen(process.env.PORT || PORT, ()=>{
  console.log('${PORT}')


  });
    