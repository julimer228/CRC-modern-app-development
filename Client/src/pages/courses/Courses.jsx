import "./courses.scss"


export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

const Courses = () =>{

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
                        <input type ="text" placeholder="Course name"/>

                        <label>Date</label>
                        <input type ="date" min={date} placeholder="Date"/>

                        <label>Time</label>
                        <input type ="time"/>

                        <label>Duration (h)</label>
                        <input type ="number" placeholder="Duration" step={0.5} id="duration"/>


                        <label>Price (PLN)</label>
                        <input type ="number" placeholder="Price" step={25} min="0" />

                        <label>Teacher</label>
                        <input type ="text" placeholder="Teacher"/>

                        <label>Language</label>

                        <div className="languages-box">
                        <div className="language">
                        <label>Polish</label>
                        <input type ="radio" id="pol"/>
                        </div>

                        <div className="language">
                        <label>English</label>
                        <input type = "radio" id="eng"/>
                        </div>
                        </div>

                        <button>Create Course</button>
                    </form>
                </div>

                <div className="right">  
                <div className="img-box"> 
                    <img className="course-img"  src="src\images\course-default.jpg" /> 
                </div>   
                    <div className="fileUpload btn btn-primary">
                        <button>
                        <label className="upload">
                            <input name='Image' type="file"/>
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