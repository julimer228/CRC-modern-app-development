import "./navbar.scss"
import CottageIcon from '@mui/icons-material/Cottage';
import EditIcon from '@mui/icons-material/Edit';
import GridViewIcon from '@mui/icons-material/GridView';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";


const Navbar = () =>{


    return(
        <div className="navbar">
            <div className="left">
                <span>Medits</span>

                <Link to="/" style={{textDecoration:"none"}}>
                <button className="menu-button">
                <CottageIcon className="icon"/>
                <p>Home page</p>
                </button>
                </Link>

                <Link to="/create" style={{textDecoration:"none"}}>
                <button className="menu-button">
                <EditIcon className="icon"/>
                <p>Create course</p>
            
                </button>
                </Link>

                <Link to="/my" style={{textDecoration:"none"}}>
                    <button className="menu-button">
                    <GridViewIcon className="icon"/>
                    <p>My courses</p>
           
                    </button>
                
                </Link>
                
            </div>

            <div className="right">
            <Link to="/register" style={{textDecoration:"none"}}>
            <button className="menu-button">
                    <ExitToAppIcon className="icon"/>
                    <p>Log out</p>
            </button>
            </Link>
                <div className="user">
                    <span>
                        {currentUser.username}
                    </span>
                    <img src="src\icons\white-blood-cell.png"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar