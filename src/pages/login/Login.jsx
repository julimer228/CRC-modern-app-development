import "./login.scss"

const Login = () =>{
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World!</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                     It has survived not only five centuries, but also the leap into electronic typesetting, 
                     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                     Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <span>Do you have an account?</span>
                     <button>Register</button>
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