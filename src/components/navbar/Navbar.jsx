import "./navbar.scss"
import CottageIcon from '@mui/icons-material/Cottage';
import EditIcon from '@mui/icons-material/Edit';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";

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
                <div className="user">
                    <span>
                        Ann Mika
                    </span>
                    <img src="src\images\profile-women.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar