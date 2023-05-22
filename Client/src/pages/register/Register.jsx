import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import * as endpoints from "../../endpoints";
import axios from 'axios';



const Register = () =>{


    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:""
    })

        const navigate = useNavigate();

    const [err, setError] = useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }


    let config = {headers: {
        'Access-Control-Allow-Origin': 'https://crc-front.vercel.app/',
        'Access-Control-Allow-Credentials': 'true'
      }}

    const registerUser =  async e =>{
        e.preventDefault()

        try{
            await axios.post(endpoints.REGISTER, inputs,config
                )
            navigate("/login")
        }
        catch(err){
            setError(err.response.data)
        }
    }


    return(
        <div className="register">
            <div className="card">
            <div className="left">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <input type ="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type ="email" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type ="password" placeholder="Password" name="password" onChange={handleChange}/>
                        {err && err}
                        <button onClick={registerUser}>Sign up</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Medits</h1>
                    <p>
                    Join our study community. Let's begin the journey!
                    </p>
                    <span>Do you have an account?</span>

                    
                     <Link to="/login">
                     <button>Sign in</button>
                     </Link>


                </div>
            </div>
        </div>
    );
};

export default Register