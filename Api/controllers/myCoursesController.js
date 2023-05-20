import {db} from "../database/connect.js"
import jwt from "jsonwebtoken";


export const getMyCourses = (req, res)=>{

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    const q = `SELECT u.id, u.username, c.title, c.duration, c.price, c.date, c.language, c.teacher,c.img
    FROM (Users u JOIN courses_users cu ON u.id = cu.userid)
    JOIN Courses c ON cu.courseid = c.id
    WHERE u.ID=?`;

    db.query(q, [req.query.userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
}



export const addMyCourse = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

 

    const q = `SELECT * FROM courses_users WHERE userid = ? AND courseid=?`
    db.query(q, [req.body.userId, req.body.courseId], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already registered!")
      
        console.log(req.body)
        console.log(res.body)

      const q = "INSERT INTO courses_users(`userid`, `courseid`) VALUES (?,?)";
  
      db.query(q, [req.body.userId, req.body.courseId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been registered");
      });
    })
  };
  