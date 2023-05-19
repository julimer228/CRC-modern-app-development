import CourseItem from "../../components/course-item/CourseItem";
import "./home.scss"
import { useQuery} from "react-query";
import { makeRequest } from "../../axios";




const Home = () =>{



    const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/courses").then((res) => {
      return res.data;
    }) );


    return(
        <div className="home">
            <div className="title">
                <span>Choose courses</span>
            </div>
            <div className="courses">

                {
                    error
                    ? "Something went wrong!"
                    : isLoading
                    ? "loading"
                    :data.map((course)=>(
                        <CourseItem  course = {course} key={course.id}/>
                    ))
                }

            </div>
        </div>
    );
};

export default Home