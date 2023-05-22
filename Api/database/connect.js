import mysql from "mysql"

export const db = mysql.createConnection({
    host:"eu-cdbr-west-03.cleardb.net",
    user:"be09b39200caa5",
    password:"d8781997",
    database: "heroku_78efffeefd42466",

})
