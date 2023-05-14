import "./leftbar.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';

const Leftbar = () =>{
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="src\images\profile-women.jpg"/>
                        <span>
                            Ann Mika
                        </span>
                    </div>
                    <div className="item">
                        <span>My courses</span>
                        <FavoriteIcon></FavoriteIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftbar