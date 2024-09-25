import { useState } from "react";

function Services() {
    const [colors , setColors] = useState("")
    return (
        <>
         <div style={{backgroundColor: colors}} className="flex items-center justify-center min-h-screen bg-gray-100">
             {/* <h1 className="text-3xl font-bold text-gray-800">
                Services are here
            </h1> */}



<div>
    {
        colors == "black" ? (<button className="text-white" onClick={()=>{
            setColors("White")
        }}>
            Change Background

        </button>) :(<button className="" onClick={()=>{
            setColors("black")
        }}>
            Change Background

        </button>)
    }
</div>


</div>
</>
    );
}

export default Services;
