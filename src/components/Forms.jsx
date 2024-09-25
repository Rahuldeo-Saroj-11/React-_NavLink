// import { useState } from "react";

// function Forms() {
    // const [name, setName] =useState("");
    // const [lastName, setLastName] =useState("");
    // const [email, setEmail] =useState("");

    // const getFname = (e) =>{
        
    //         setName(e.target.value)
        

    //     //  alert('Function is working....')
    //     //  let name;
    //     // const res =document.querySelector('#fname').value;
    //     // name = res;
    //     // console.log(res);
    // }

////////////////////////////////////////other code/////////////////////////////////////////////////////////////////
//     const [userInput, setUserInput] = useState({
//         fname :"",
//         lname : "",
//         email : "",
//         githubLink : ""
//     });
//   console.log()
//     function handleChange(e){

//         setUserInput({
//             ...userInput,
//             [e.target.name] : e.target.name,
           
//         })
//         console.log(userInput);
        

//     }

//     console.log('component re-redered')
//     return (
//         <>
//         <div>Forms</div>
//         <input
//         type="text" 
//         name="fname" 
//         id="fname" 
//         placeholder="Enter Your First Name"
//         onChange={handleChange}
//         value={userInput.fName}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
//         // onChange={(e) => setName(e.target.value) }
        
//         />
//         <input
//         type="text" 
//         name="lname" 
//         id="lname" 
//         placeholder="Enter Your Last Name"
//         onChange={handleChange}
//         value={userInput.lName}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
//         />
//         <input
//         type="email" 
//         name="email" 
//         id="email" 
//         placeholder="Enter Your Email"
//         onChange={handleChange}
//         value={userInput.email}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
        
//         />
//         <input
//         type="text" 
//         name="githubLink" 
//         id="git" 
//         placeholder="Enter Your GitHub Link"
//         onChange={handleChange}
//         value={userInput.githubLink}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
        
//         />
//         <h1>Fname is:{userInput.fname}</h1>
//         <h1>Lname is:{userInput.lname}</h1>
//         <h1>Email is:{userInput.email}</h1>
//         <h1>GitHub Link is:{userInput.githubLink}</h1>
//         </>
//     )
    
// }
// export default Forms;

///////////////////////////////////////////////////other code //////////////////////////////////////////////////////////
// import { useState } from "react";

// function LoginPage() {
//     const [dropdown , setDropdown] = useState("")
//     const [isChecked,setIsChecked] = useState("");
//     const [radio,setRadio] = useState("apple"); const [userInput, setUserInput] = useState({
//         fname :"",
//         lname : "",
//         email : "",
//         githubLink : ""
//     });
//   console.log()
//     function handleChange(e){

//         setUserInput({
//             ...userInput,
//             [e.target.name] : e.target.name,
           
//         })
//         console.log(userInput);
        

//     }

//     console.log('component re-redered')
//     return (
//         <form>
//             <h1>Drop Down  value is :{dropdown}</h1>
//             <h1>Checkbox is : {isChecked ? "True" : "False"}</h1>
//             <h1>Radio button is:{radio}</h1>
//             <h1>Fname is:{userInput.fname}</h1>
//         <h1>Lname is:{userInput.lname}</h1>
//         <h1>Email is:{userInput.email}</h1>
//         <h1>GitHub Link is:{userInput.githubLink}</h1>

//             <select  value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
//                 <option value ="apple">Apple</option>
//                 <option value ="orange">Orange</option>
//                 <option value ="banana">Banana</option>
//             </select>
//             <br/>
//             <label>Checkbox:</label>
//             <input type="checkbox" 
//                     cheacked={isChecked}
//                     onChange={(e)=>{setIsChecked(e.target.checked)}}/>
//              <br/>
//              <label>Apple:</label>
//              <input type="radio"
//                     checked={radio === "apple"}
//                     value="apple"
//                     onChange={(e)=>{setRadio(e.target.value)}}
//              />
//               <br/>
//              <label>Orange:</label>
//              <input type="radio"
//                     checked={radio === "orange"}
//                     value="orange"
//                     onChange={(e)=>{setRadio(e.target.value)}}
//              />
//               <br/>
//              <label>Banana:</label>
//              <input type="radio"
//                     checked={radio === "banana"}
//                     value="banana"
//                     onChange={(e)=>{setRadio(e.target.value)}}

//              />
//             <input
//         type="text" 
//         name="fname" 
//         id="fname" 
//         placeholder="Enter Your First Name"
//         onChange={handleChange}
//         value={userInput.fName}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
//         // onChange={(e) => setName(e.target.value) }
        
//         />
//         <input
//         type="text" 
//         name="lname" 
//         id="lname" 
//         placeholder="Enter Your Last Name"
//         onChange={handleChange}
//         value={userInput.lName}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
//         />
//         <input
//         type="email" 
//         name="email" 
//         id="email" 
//         placeholder="Enter Your Email"
//         onChange={handleChange}
//         value={userInput.email}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
        
//         />
//         <input
//         type="text" 
//         name="githubLink" 
//         id="git" 
//         placeholder="Enter Your GitHub Link"
//         onChange={handleChange}
//         value={userInput.githubLink}
//         className="border rounded-md bg-gray-200 text-black outline-none m-4 p-2"
      
        
//         />
        

            
//         </form>
        
//     );
// }

// export default LoginPage;

////////////////////////////////////////////other code ////////////////////////////////////////////////////









import React, { useState } from 'react';
import { Form } from 'react-router-dom';

function Forms() {  // Corrected component name
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name,
      gender,
      hobbies,
      country,
      contact,
      email,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Student Login Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded shadow-md">
        <div>
          <label htmlFor="nameInput" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="contactInput" className="block text-sm font-medium">Contact Number:</label>
          <input
            type="text"
            id="contactInput"
            value={contact}
            onChange={handleContactChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="emailInput" className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <span className="block text-sm font-medium">Gender:</span>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === 'other'}
                onChange={handleGenderChange}
              />
              Other
            </label>
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium">Hobbies:</span>
          <div className="space-x-4">
            <label>
              <input
                type="checkbox"
                value="reading"
                checked={hobbies.includes('reading')}
                onChange={handleCheckboxChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                value="sports"
                checked={hobbies.includes('sports')}
                onChange={handleCheckboxChange}
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                value="coding"  // Corrected spelling
                checked={hobbies.includes('coding')}
                onChange={handleCheckboxChange}
              />
              Coding
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="countrySelect" className="block text-sm font-medium">Select Coures:</label>
          <select
            id="countrySelect"
            value={country}
            onChange={handleCountryChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- Select --</option>
            <option value="Web Developmenta">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-6 bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-2">Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Contact:</strong> {submittedData.contact}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Hobbies:</strong> {submittedData.hobbies.join(', ')}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
        </div>
      )}
    </div>
  );
}

export default Forms;
