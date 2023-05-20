import "./my.scss"
import { makeRequest } from "../../axios";
import MyCourseItem from "../../components/my-course-item/MyCourseItem";
import { useQuery} from "react-query";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const My = () =>{

    const {currentUser} = useContext(AuthContext);

    
    const { isLoading, error, data } = useQuery(["coursesid"], () =>
    makeRequest.get("/myCourses?userId="+currentUser.id).then((res) => {
      console.log(currentUser.id)
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
                    :data.map((myCourse)=>(
                        <MyCourseItem  myCourse = {myCourse} key={myCourse.courseid}/>
                    ))
                }

            </div>
            <span></span>
        </div>
    );
};

export default My