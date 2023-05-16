import "./my-course-item.scss"
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TranslateIcon from '@mui/icons-material/Translate';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const MyCourseItem = () =>{
    return(
        <div className="element">
            <div className="left">
            <img src="src\icons\cell.png" />
                <span>Course Title</span>
               
            </div>
            <div className="right">
                <div className="course-element">
                    <CalendarMonthIcon className="icon"/>
                    <span>
                    Date:
                    </span>

                   <span >
                    10:20 01.02.2023
                    </span>
        
                    
                </div>

                <div className="course-element">
                    <AlarmIcon className="icon"/>
                    <span>
                    Duration:
                    </span>
                    <span>
                    120 min
                    </span>
                </div>

                <div className="course-element">
                    <MonetizationOnIcon className="icon"/>
                    <span>
                    Price:
                    </span>
                    <span>
                    2000 zł
                    </span>

                </div>

                <div className="course-element"> 
                    <PersonIcon className="icon"/>
                    <span>
                    Teacher:
                    </span>
                    <span>
                    Mark Parker
                    </span>
                </div>

                
                <div className="course-element">
                    <TranslateIcon className="icon"/>
                    <span>
                    Language:
                    </span>
                    <span>
                    English
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyCourseItem