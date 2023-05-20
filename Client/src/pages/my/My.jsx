import "./my.scss"
import { makeRequest } from "../../axios";
import MyCourseItem from "../../components/my-course-item/MyCourseItem";
import { useQuery} from "react-query";


const My = () =>{

    
    const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/courses?userId=").then((res) => {
      return res.data;
    }) );


    return(
        <div className="my">
            <div className="title">
                <span>My courses</span>
            </div>
            <div className="courses">

                {
                    error
                    ? "Something went wrong!"
                    : isLoading
                    ? "loading"
                    :data.map((course)=>(
                        <MyCourseItem  course = {course} key={course.id}/>
                    ))
                }

            </div>
        </div>
    );
};

export default My