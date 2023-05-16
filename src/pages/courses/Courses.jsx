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

                        <label>Duration</label>
                        <label for="duration">PLN</label>
                        <input type ="number" placeholder="Duration" step={0.5} id="duration"/>


                        <label>Price</label>
                        <label for="pol">Polish</label>
                        <input type ="number" placeholder="Price" step={25} min="0" />

                        <label>Teacher</label>
                        <input type ="text" placeholder="Teacher"/>

                        <label>Language</label>

                        <div className="languages-box">
                        <div className="language">
                        <label for="pol">Polish</label>
                        <input type ="radio" id="pol"/>
                        </div>

                        <div className="language">
                        <label for="eng">English</label>
                        <input type = "radio" id="eng"/>
                        </div>
                        </div>

                        <button>Create Course</button>
                    </form>
                </div>

                <div className="right">
                        <input type="file" id="file" accept=".jpg, .png" button="" value=""/>
                        <span>No file chosen</span>
                </div>
            </div>    
        </div>
    );
};

export default Courses