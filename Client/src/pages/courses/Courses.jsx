import "./courses.scss"
import * as endpoints from "../../endpoints";
import axios from 'axios';
import { useState } from "react";

export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

const Courses = () =>{




    const [inputs, setInputs] = useState({
        title:null,
        date:null,
        time:null,
        duration:null,
        price:null,
        teacher:null,
        langs:null,
        image:null
    })


    let dateTime = inputs.date+" "+inputs.time

    const toSend = {
        title:inputs.title,
        date: dateTime,
        duration:inputs.duration,
        price:inputs.price,
        teacher:inputs.teacher,
        language:inputs.langs,
        img:"test"
    }

    const [err, setError] = useState(null)
    const [info, setInfo] = useState(null)


    const handleChange = e =>{
        setInfo(null)
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const addCourse =  async e =>{
        e.preventDefault()

        try{
            await axios.post(endpoints.ADD_COURSE, toSend)
            setInfo("Course "+toSend.title+" has been created!")
        }
        catch(err){
            setError("Invalid input!")
        }
    }






    const date = getCurrentDate('-');

    return(
        <div className="courses-page">
            <div className="title">
                <span>Create course</span>
            </div>
            <div className="content">
                <div className="left">
                    <form>
                        <label>Course name</label>
                        <input type ="text" placeholder="Course name" name="title" onChange={handleChange}/>

                        <label>Date</label>
                        <input type ="date" min={date} placeholder="Date" name="date" onChange={handleChange}/>

                        <label>Time</label>
                        <input type ="time" name="time" onChange={handleChange}/>

                        <label>Duration (min)</label>
                        <input type ="number" placeholder="Duration" step={15} id="duration" name="duration" onChange={handleChange}/>


                        <label>Price (PLN)</label>
                        <input type ="number" placeholder="Price" step={25} min="0" name="price" onChange={handleChange}/>

                        <label>Teacher</label>
                        <input type ="text" placeholder="Teacher" name="teacher" onChange={handleChange}/>

                        <label>Language</label>

                        <div className="languages-box">
                            <fieldset id="langs" onChange={handleChange}>
                                <div className="language">
                
                                <label>Polish</label>
                                    <input type ="radio" id="pol" name="langs" value="Polish"/>
                                </div>

                                <div className="language">
                                    <label>English</label>
                                    <input type = "radio" id="eng" name="langs" value="English"/>
                                </div>
                            </fieldset>
                        </div>

                        <button onClick={addCourse}>Create Course</button>
                    </form>
                    <span className="info">{err && err}</span>
                    <span className="info">{info && info}</span>
                    
                </div>

                <div className="right">  
                <div className="img-box"> 
                    <img className="course-img"  src="src\images\course-default.jpg" /> 
                </div>   
                    <div className="fileUpload btn btn-primary">
                        <button>
                        <label className="upload">
                            <input name='image' type="file" onChange={handleChange}/>
                                Upload Image
                        </label>
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Courses