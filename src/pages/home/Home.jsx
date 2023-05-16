import CourseItem from "../../components/course-item/CourseItem";
import "./home.scss"

const Home = () =>{
    return(
        <div className="home">
            <div className="title">
                <span>Choose courses</span>
            </div>
            <div className="courses">

                <CourseItem/>

            </div>
        </div>
    );
};

export default Home