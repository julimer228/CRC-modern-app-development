import "./my-course-item.scss"
import PersonIcon from '@mui/icons-material/Person';
import AlarmIcon from '@mui/icons-material/Alarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TranslateIcon from '@mui/icons-material/Translate';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Moment from 'moment';


const MyCourseItem = ({ course }) =>{

    return(
        <div className="element">
            <div className="left">
            <img src={course.img} />
                <span>{course.title}</span>
               
            </div>
            <div className="right">
                <div className="course-element">
                    <CalendarMonthIcon className="icon"/>
                    <span>
                    Date:
                    </span>

                   <span >
                   {Moment(course.date).format('DD-MM-YYYY, HH:mm a')}
                    </span>
        
                    
                </div>

                <div className="course-element">
                    <AlarmIcon className="icon"/>
                    <span>
                    Duration:
                    </span>
                    <span>
                    {course.duration} h
                    </span>
                </div>

                <div className="course-element">
                    <MonetizationOnIcon className="icon"/>
                    <span>
                    Price:
                    </span>
                    <span>
                    {course.price} zł
                    </span>

                </div>

                <div className="course-element"> 
                    <PersonIcon className="icon"/>
                    <span>
                    Teacher:
                    </span>
                    <span>
                    {course.teacher}
                    </span>
                </div>

                
                <div className="course-element">
                    <TranslateIcon className="icon"/>
                    <span>
                    Language:
                    </span>
                    <span>
                    {course.language}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyCourseItem