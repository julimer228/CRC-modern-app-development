import "./courses.scss"
import CourseItem from "../../components/course-item/CourseItem";
import MyCourseItem from "../../components/my-course-item/MyCourseItem";

const Courses = () =>{
    return(
        <div className="courses-page">
            <div className="title">
                <span>Create course</span>
            </div>
            <div className="courses">
                <div className="left">
                <h1>
                    Login
                </h1>
                    <form>
                        <input type ="text" placeholder="Course name"/>
                        <input type ="text" placeholder="Date"/>
                        <input type ="text" placeholder="Duration"/>
                        <input type ="text" placeholder="Price"/>
                        <input type ="text" placeholder="Teacher"/>
                        <input type ="text" placeholder="Language"/>
                        <button>Create Course</button>
                    </form>
                </div>

                <div className="right">
                    
                </div>


            </div>      
        </div>
    );
};

export default Courses