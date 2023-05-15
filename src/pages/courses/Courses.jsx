import "./courses.scss"
import CourseItem from "../../components/course/CourseItem";

const Courses = () =>{
    return(
        <div className="courses-page">
            <div className="title">
                <span>Create course</span>
            </div>
            <div className="courses">

                <CourseItem/>
                <CourseItem/>
                <CourseItem/>
                <CourseItem/>
            </div>      
        </div>
    );
};

export default Courses