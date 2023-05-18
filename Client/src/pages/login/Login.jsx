import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as endpoints from "../../endpoints";
import axios from 'axios';

        
    
    const Login = () =>{
    
    
        const [inputs, setInputs] = useState({
            username:"",
            password:""
        })
    
        const [err, setError] = useState(null)
    
        const handleChange = e =>{
            setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
        }
    
        const loginUser =  async e =>{
            e.preventDefault()
    
            try{
                await axios.post(endpoints.LOGIN, inputs)
            }
            catch(err){
                setError(err.response.data)
            }
        }
    






    return(
        <div className="login">
            <div className="card">

                <div className="right">
                    <h1>
                        Login
                    </h1>
                    <form>
                        <input type ="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type ="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <button onClick={loginUser}>Login</button>
                        {err && err}
                    </form>
                </div>

                <div className="left">
                    <h1>Medits</h1>
                    <p>
                    Join our study community. Let's begin the journey!
                    </p>
                    <span>Don't have an account?</span>

                     <Link to="/register">
                     <button>Register</button>
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default Login