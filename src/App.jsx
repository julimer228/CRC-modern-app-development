import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import createCourses from "./pages/createCourse/createCourse";
import myCourses from "./pages/myCourses/myCourses";

import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";



function App() {


  const currentUser = true;

  const Layout = () =>{
    return(
      <div className="theme-dark">
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
        element:<Profile/>
      },
      {
        path:"/my",
        element:<myCourses/>
      },
      {
        path:"/create",
        element:<myCourses/>
      }
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

