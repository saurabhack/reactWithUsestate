import {useState} from "react"
function UseStateUsingArray(){
    const [courses,setCourses]=useState([])
    function addCourses(){
        const course=prompt("enter your course = ")
        setCourses([...courses,course])
    }
    function deleteCourses(i){
        const newCourses=courses.filter((val,index)=>{
            return i!=index 
        })
        setCourses(newCourses)
    }
    function updateCourses(i){
        const updatedValue=prompt("enter your updated value = ")
        const updatedCourse=[...courses]
        updatedCourse[i]=updatedValue
        setCourses(updatedCourse)
        
    }
    return(
    <>
    <div className="w-[100vw] h-[20vh] flex justify-center items-center">
    <button className="bg-black text-white p-2 rounded-lg m-2" onClick={addCourses}>Add Courses</button>
    </div>
    <div className="w-[100vw] h-[50vh]  flex items-center  flex-col">
    
        <ul>
            {
                courses.map((val,i)=>{
                    return <li className=" p-2 mt-2" key={i+1}>{val}<button onClick={()=>{
                        deleteCourses(i)
                    }} className="border border-red-500 p-2 m-2 rounded-md bg-red-600 text-white">Delete</button> <button onClick={()=>{
                        updateCourses(i)
                    }} className="border border-red-500 p-2 m-2 rounded-md bg-green-600 text-white">Update</button></li>
                })
            }
        </ul>
        
    </div>
    </>
)

}
export default UseStateUsingArray