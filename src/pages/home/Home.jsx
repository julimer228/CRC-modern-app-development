import CourseItem from "../../components/course/CourseItem";
import "./home.scss"

const Home = () =>{
    return(
        <div className="home">
            <div className="title">
                <span>Choose courses</span>
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

export default Home