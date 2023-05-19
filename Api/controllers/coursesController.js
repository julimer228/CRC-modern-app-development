import {db} from "../database/connect.js"

export const getCourse = (req, res)=>{
    const q=`SELECT * FROM courses`

    db.query(q, (err, data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })

    
}