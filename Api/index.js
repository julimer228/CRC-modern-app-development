import  Express  from "express";
import userRoutes from "./routes/users.js"
import coursesRoutes from "./routes/courses.js"
import authRoutes from "./routes/auth.js"

const app = Express()

app.use(Express.json())

app.use("/api/users",userRoutes)
app.use("/api/courses",coursesRoutes)
app.use("/api/auth",authRoutes)


app.listen(8800, ()=>{
    console.log("API working!")
})