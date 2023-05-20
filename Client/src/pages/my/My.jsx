import "./my.scss"
import { makeRequest } from "../../axios";
import CourseItem from "../../components/course-item/CourseItem";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

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
                    data.map((course)=>(
                        <CourseItem  course = {course} key={course.id}/>
                    ))
                }
              
            </div>
        </div>
    );
};

export default My