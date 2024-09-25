// import { useState } from "react";

// function ProductLoginPage() {
//     const [productCategory, setProductCategory] = useState("electronics");
//     const [selectedOption, setSelectedOption] = useState(""); // Holds the selected checkbox option
//     const [paymentMethod, setPaymentMethod] = useState("creditCard");
//     const [userInput, setUserInput] = useState({
//         productName: "",
//         userEmail: "",
//         userPhone: "",
//         productLink: ""
//     });

//     function handleChange(e) {
//         setUserInput({
//             ...userInput,
//             [e.target.name]: e.target.value
//         });
//     }

//     return (
//         <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold text-gray-700 mb-6">Product Login Page</h1>
//             <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                
//                 {/* Dropdown for Product Category */}
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Product Category
//                     </label>
//                     <select
//                         value={productCategory}
//                         onChange={(e) => setProductCategory(e.target.value)}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         <option value="electronics">Electronics</option>
//                         <option value="fashion">Fashion</option>
//                         <option value="grocery">Grocery</option>
//                     </select>
//                 </div>

//                 {/* Checkboxes for Single Option Selection */}
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Options (Select One)
//                     </label>

//                     <div className="flex items-center mb-2">
//                         <input
//                             type="checkbox"
//                             checked={selectedOption === "warranty"}
//                             onChange={() => setSelectedOption("warranty")}
//                             className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">Add Warranty</span>
//                     </div>

//                     <div className="flex items-center mb-2">
//                         <input
//                             type="checkbox"
//                             checked={selectedOption === "expressDelivery"}
//                             onChange={() => setSelectedOption("expressDelivery")}
//                             className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">Opt for Express Delivery</span>
//                     </div>

//                     <div className="flex items-center mb-2">
//                         <input
//                             type="checkbox"
//                             checked={selectedOption === "giftWrap"}
//                             onChange={() => setSelectedOption("giftWrap")}
//                             className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">Gift Wrap</span>
//                     </div>
//                 </div>

//                 {/* Radio buttons for Payment Method */}
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Payment Method
//                     </label>
//                     <div className="flex items-center mb-2">
//                         <input
//                             type="radio"
//                             checked={paymentMethod === "creditCard"}
//                             value="creditCard"
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">Credit Card</span>
//                     </div>
//                     <div className="flex items-center mb-2">
//                         <input
//                             type="radio"
//                             checked={paymentMethod === "paypal"}
//                             value="paypal"
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">PayPal</span>
//                     </div>
//                     <div className="flex items-center mb-2">
//                         <input
//                             type="radio"
//                             checked={paymentMethod === "cashOnDelivery"}
//                             value="cashOnDelivery"
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//                         />
//                         <span className="ml-2 text-gray-700">Cash on Delivery</span>
//                     </div>
//                 </div>

//                 {/* Text inputs for user information */}
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Product Name
//                     </label>
//                     <input
//                         type="text"
//                         name="productName"
//                         placeholder="Enter Product Name"
//                         onChange={handleChange}
//                         value={userInput.productName}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         name="userEmail"
//                         placeholder="Enter Your Email"
//                         onChange={handleChange}
//                         value={userInput.userEmail}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Phone Number
//                     </label>
//                     <input
//                         type="text"
//                         name="userPhone"
//                         placeholder="Enter Your Phone Number"
//                         onChange={handleChange}
//                         value={userInput.userPhone}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                         Product Link
//                     </label>
//                     <input
//                         type="text"
//                         name="productLink"
//                         placeholder="Enter Product Link"
//                         onChange={handleChange}
//                         value={userInput.productLink}
//                         className="block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                     Submit
//                 </button>
//             </form>

//             {/* Display current selections */}
//             <div className="bg-gray-50 p-4 mt-6 rounded-lg w-full max-w-lg">
//                 <h2 className="text-xl font-semibold text-gray-800">Current Selections</h2>
//                 <p><strong>Product Category:</strong> {productCategory}</p>
//                 <p><strong>Selected Option:</strong> {selectedOption ? selectedOption : "None"}</p>
//                 <p><strong>Payment Method:</strong> {paymentMethod}</p>
//                 <p><strong>Product Name:</strong> {userInput.productName}</p>
//                 <p><strong>Email:</strong> {userInput.userEmail}</p>
//                 <p><strong>Phone Number:</strong> {userInput.userPhone}</p>
//                 <p><strong>Product Link:</strong> {userInput.productLink}</p>
//             </div>
//         </div>
//     );
// }

// export default ProductLoginPage;


///////////////////////////////////////////other code for form  with password //////////////////////////////////////////////////

// import React, { useState } from "react";

// const LoginPage = () => {
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     gender: "",
//     skills: [],
//     country: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   // Handle changes in input fields
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData((prevData) => {
//         if (checked) {
//           return { ...prevData, skills: [...prevData.skills, value] };
//         } else {
//           return {
//             ...prevData,
//             skills: prevData.skills.filter((skill) => skill !== value),
//           };
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData); // Store submitted form data to display on UI
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
//       <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login Form</h2>

//         {/* Username */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Gender (Radio) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Gender:</label>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               onChange={handleChange}
//               checked={formData.gender === "Male"}
//               className="mr-2"
//             />
//             <span className="mr-4">Male</span>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               onChange={handleChange}
//               checked={formData.gender === "Female"}
//               className="mr-2"
//             />
//             <span>Female</span>
//           </div>
//         </div>

//         {/* Skills (Checkboxes) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Skills:</label>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="skills"
//               value="HTML"
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <span className="mr-4">HTML</span>
//             <input
//               type="checkbox"
//               name="skills"
//               value="CSS"
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <span className="mr-4">CSS</span>
//             <input
//               type="checkbox"
//               name="skills"
//               value="JavaScript"
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <span>JavaScript</span>
//           </div>
//         </div>

//         {/* Country (Dropdown) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Country:</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Country</option>
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Display submitted form data */}
//       {submittedData && (
//         <div className="mt-8 p-4 bg-gray-200 rounded-lg shadow-md w-full max-w-md">
//           <h3 className="text-lg font-semibold mb-4">Submitted Data</h3>
//           <p><strong>Username:</strong> {submittedData.username}</p>
//           <p><strong>Password:</strong> {submittedData.password}</p>
//           <p><strong>Gender:</strong> {submittedData.gender}</p>
//           <p><strong>Skills:</strong> {submittedData.skills.join(", ")}</p>
//           <p><strong>Country:</strong> {submittedData.country}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;
///////////////////////////////////////////Other coder for that ///////////////////////////////////////////////////////////////////////



import React, { useState } from "react";

function LoginPage() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("");

  // Add or update course (To-Do item)
  const handleAddOrUpdateCourse = () => {
    if (!newCourse.trim()) return;

    if (editIndex !== null) {
      const updatedCourses = courses.map((course, index) =>
        index === editIndex ? newCourse : course
      );
      setCourses(updatedCourses);
      setEditIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }

    setNewCourse(""); // Clear input field
  };

  // Delete course using filter
  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  // Start editing a course
  const handleEditCourse = (index) => {
    setNewCourse(courses[index]);
    setEditIndex(index);
  };

  // Handle filter input change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtered courses based on filter text
  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-purple-700 p-8">
      <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">
          To-Do List
        </h1>

        {/* Filter Input */}
        <div className="relative flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-center"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        {/* Add/Edit To-Do Input */}
        <div className="relative flex justify-center space-x-2 mb-6">
          <input
            type="text"
            placeholder="Add or edit your task"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button
            onClick={handleAddOrUpdateCourse}
            className={`px-6 py-3 rounded-full text-white font-medium ${
              editIndex !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            } transition duration-200 ease-in-out`}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* To-Do List */}
        <ul className="space-y-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((val, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 rounded-lg shadow-sm p-4"
              >
                <span className="text-gray-800 text-lg">{val}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditCourse(i)}
                    className="px-4 py-2 text-sm text-white bg-yellow-400 hover:bg-yellow-500 rounded-full shadow transition duration-200 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(i)}
                    className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full shadow transition duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No tasks found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LoginPage;
