import {db} from "../database/connect.js"
import bcrypt from "bcryptjs"

export const login = (req, res) =>{
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(404).json("User not found!")

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
        if(!checkPassword) return res.status(400).json("Wrong password or username!")
    })
}

export const register = (req, res) =>{

    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists!")
        
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        
        const q2 = "INSERT INTO users (`username`, `password`, `email`) VALUE (?,?,?)"
        db.query(q2, [req.body.username, hashedPassword, req.body.email], (err, data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json("user has been created")
        })

   
   
    })

   
}

export const logout = (req, res) =>{

}