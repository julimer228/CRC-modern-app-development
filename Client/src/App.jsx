import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import My from "./pages/my/my";
import Courses from "./pages/courses/Courses";
import  {useContext} from "react";
import {AuthContext} from "./context/authContext";

import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";



function App() {


  const {currentUser} = useContext(AuthContext);

  const Layout = () =>{
    return(
      <div className="theme">
        <Navbar/>
        <div className="center-part">
          <Outlet/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{

    if(!currentUser){
      return <Navigate to={"/login"}></Navigate>
    }
    return children;
  }


  const router = createBrowserRouter([

    {
      path:"/",
      element:<ProtectedRoute>
        <Layout/>
        </ProtectedRoute>,
      children:[{
        path: "/",
        element:<Home/>,
      },
      {
        path:"/profile/:id",
        element:<Profile/>,
      },
      {
        path:"/my",
        element:<My/>,
      },
      {
        path:"/create",
        element:<Courses/>,
      },

  ]
    },
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

  return (<div className="page"> 
    <RouterProvider router={router}/>
  </div>);
}



export default App;

