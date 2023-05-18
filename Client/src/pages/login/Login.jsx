import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

        
    
    const Login = () =>{

    
        const [inputs, setInputs] = useState({
            username:"",
            password:"",
        });
    
        const navigate = useNavigate();
        const [err, setErr] = useState(null);
    
        const handleChange = (e) =>{
            setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
        };

        const {login} = useContext(AuthContext);

        const handleLogin = async (e) => {
            e.preventDefault();
            try {
              await login(inputs);
              navigate("/")
            } catch (err) {

              setErr(err.response.data);

            }
          };




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
                        <button onClick={handleLogin}>Login</button>
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