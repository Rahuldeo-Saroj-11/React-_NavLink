import { useState } from "react";

function StateComponentArray() {
    const [courses, setCourses] = useState(["MERN", "MEAN", "DS", "ML", "UIUX"]);

    function addCourse() {
        const newCourse = window.prompt('Enter the Course name:').trim();
        
        if (newCourse) {
            setCourses([...courses, newCourse]);
        } else {
            alert("Course name cannot be empty!");
        }
    } 
    
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">Course List</h1>
            <ul className="list-disc list-inside bg-white p-4 rounded shadow-md">
                {courses.map((val, i) => (
                    <li key={i + 1} className="text-lg py-1">{val}</li>
                ))}
            </ul>
            <button 
                onClick={addCourse} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
                Add Course
            </button>
        </div>
    );
}

export default StateComponentArray;



