import  Express  from "express";
import myCoursesRoutes from "./routes/myCourses.js";
import coursesRoutes from "./routes/courses.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = Express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next();
});

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(Express.json())
app.use(cookieParser())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../Client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/api/myCourses",myCoursesRoutes)
app.use("/api/courses",coursesRoutes)
app.use("/api/auth",authRoutes)


app.listen(8800, ()=>{
    console.log("API working!")
})