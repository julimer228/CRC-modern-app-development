import "./course-item.scss"
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TranslateIcon from '@mui/icons-material/Translate';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const CourseItem = () =>{
    return(
        <div className="element">
            <div className="left">
                <span>Course Title</span>
                <img src="" alt="" />
            </div>
            <div className="right">
                <div className="course-element">
                    <CalendarMonthIcon className="icon"/>
                    <span>
                    Date
                    </span>
                </div>

                <div className="course-element">
                    <AlarmIcon className="icon"/>
                    <span>
                    Time
                    </span>
                </div>

                <div className="course-element">
                    <MonetizationOnIcon className="icon"/>
                    <span>
                    Price
                    </span>

                </div>

                <div className="course-element"> 
                    <PersonIcon className="icon"/>
                    <span>
                    Teacher
                    </span>
                </div>

                
                <div className="course-element">
                    <TranslateIcon className="icon"/>
                    <span>
                    Language
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CourseItem