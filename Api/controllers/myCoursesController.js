import {db} from "../database/connect.js"
import jwt from "jsonwebtoken";


export const getMyCourses = (req, res)=>{

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    const q = `SELECT u.id, u.username, c.title, c.duration, c.price, c.date, c.language, c.teacher,c.img
    FROM (Users u JOIN courses_users cu ON u.id = cu.userid)
    JOIN Courses c ON cu.courseid = c.id
    WHERE u.ID=?`;
    
    console.log(req.body)

    db.query(q, [req.body.userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });

}



export const addMyCourse = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "accessToken", (err, userInfo) => {
      if (err) return res.status(403).json("Invalid token!");
  
      const q = "INSERT INTO courses_users(`userid`, `courseid`) VALUES (?)";
      const values = [
        userInfo.id,
        req.body.courseId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been registered");
      });
    });
  };
  