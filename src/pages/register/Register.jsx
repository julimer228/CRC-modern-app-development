import "./register.scss"

const Register = () =>{
    return(
        <div className="register">
            <div className="card">
            <div className="left">
                    <h1>
                        Register
                    </h1>
                    <form>
                        <input type ="text" placeholder="Name"/>
                        <input type ="text" placeholder="Username"/>
                        <input type ="text" placeholder="Email"/>
                        <input type ="password" placeholder="Password"/>
                        <button>Sign up</button>
                    </form>
                </div>
                <div className="right">
                    <h1>Medits</h1>
                    <p>
                    Join our study community. Let's begin the journey!
                    </p>
                    <span>Do you have an account?</span>
                     <button>Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Register