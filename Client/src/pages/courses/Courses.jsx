import "./courses.scss"
import * as endpoints from "../../endpoints";
import axios from 'axios';
import { useState, useEffect } from "react";
import { makeRequest } from "../../axios";



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

    const [imgUrl, setUrl] =useState(null) ;

    let dateTime = inputs.date+" "+inputs.time

    let toSend = {
        title:inputs.title,
        date: dateTime,
        duration:inputs.duration,
        price:inputs.price,
        teacher:inputs.teacher,
        language:inputs.langs,
        img:inputs.image
    }

    const [err, setError] = useState(null)
    const [info, setInfo] = useState(null)
    const [file, setFile] = useState(null);

    const handleChange = e =>{
        setInfo(null)
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
        setUrl(inputs.image)
    }



    let config = {headers: {
        'Access-Control-Allow-Origin': 'https://crc-front.vercel.app',
        'Access-Control-Allow-Credentials': true
      }}

    const addCourse =  async e =>{
        e.preventDefault()

        try{
            await axios.post(endpoints.ADD_COURSE, toSend, config)
            setInfo("Course "+toSend.title+" has been created!")
            setTimeout(() => {
                setInfo(null);
                        }, 3000);
        }
        catch(err){
            setError("Invalid input!")
            setTimeout(() => {
                setError(null);
                        }, 3000);
        }
    }

    
    const refreshImage = e =>{
        setUrl(inputs.image)
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
                        <input type ="time" placeholder="Duration" step={600} id="duration" name="duration" onChange={handleChange}/>


                        <label>Price (PLN)</label>
                        <input type ="number" placeholder="Price" step={25} min="0" name="price" onChange={handleChange}/>

                        <label>Teacher</label>
                        <input type ="text" placeholder="Teacher" name="teacher" onChange={handleChange}/>

                        <label>Image URL</label>
                        <input type ="text" placeholder="Image URL" name="image" onChange={handleChange} oninput={refreshImage}/>

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
                   
                </div>   
                    <div className="rectangle">

                    <img src={imgUrl} key={Date.now()}/>

                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Courses