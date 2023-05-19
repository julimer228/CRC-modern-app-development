import {db} from "../database/connect.js"
import  response  from "express"
import bcrypt from "bcryptjs"
import jwt  from "jsonwebtoken"


export const getCourse = (req, res)=>{
    const q=`SELECT * FROM courses`

    db.query(q, (err, data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })    
}


export const addCourse2 = (req, res) =>{

    console.log(req.body)

    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists!")
        
    
        
        const q2 = "INSERT INTO users (`username`, `password`, `email`) VALUE (?,?,?)"
        db.query(q2, [req.body.username, req.body.email, req.body.email], (err, data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json("user has been created")
        }) 
    })  
}


export const addCourse = (req, res) => {
   
    console.log(req.body)
      
  
      const q =
        "INSERT INTO courses(`title`, `price`, `date`, `duration`, `language`, `teacher`, `img`) VALUES (?)";
      const values = [
        req.body.title,
        req.body.price,
        req.body.date,
        req.body.duration,
        req.body.language,
        req.body.teacher,
        req.body.img

      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Course has been created.");
      });
  };

