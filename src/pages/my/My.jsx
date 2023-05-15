import "./my.scss"
import CourseItem from "../../components/course/CourseItem";

const My = () =>{
    return(
        <div className="my">
            <div className="title">
                <span>My courses</span>
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

export default My