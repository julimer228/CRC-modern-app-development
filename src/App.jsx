import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {



  const Layout = () =>{
    return(
      <div>
        
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/register",
      element: <Register/>,
    },
    {
      path:"/home",
      element: <Home/>,
    },
    {
      path:"/profile",
      element: <Profile/>,
    },
  ]);

  return (<div>
    <RouterProvider router={router}/>
  </div>);
}



export default App;

