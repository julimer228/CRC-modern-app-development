import "./login.scss";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="login">
            <div className="card">
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

                <div className="right">
                    <h1>
                        Login
                    </h1>
                    <form>
                        <input type ="text" placeholder="Username"/>
                        <input type ="password" placeholder="Password"/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login