import "./my.scss"
import MyCourseItem from "../../components/my-course-item/MyCourseItem";

const My = () =>{
    return(
        <div className="my">
            <div className="title">
                <span>My courses</span>
            </div>
            <div className="courses">

                <MyCourseItem/>
              
            </div>
        </div>
    );
};

export default My