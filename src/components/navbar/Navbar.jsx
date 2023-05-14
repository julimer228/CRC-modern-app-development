import "./navbar.scss"
import CottageIcon from '@mui/icons-material/Cottage';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>Medits</span>
                </Link>
                <CottageIcon className="icon"/>
                <Brightness6Icon className="icon"/>
                <GridViewIcon className="icon"/>
                <div className="search">
                    <ManageSearchIcon className="icon"/>
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div className="right">
                <EmailIcon className="icon"/>
                <NotificationsIcon className="icon"/>
                <Person2Icon className="icon"/>
                <div className="user">
                    <img src="src\images\profile-women.jpg"/>
                    <span>
                        Ann Mika
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar