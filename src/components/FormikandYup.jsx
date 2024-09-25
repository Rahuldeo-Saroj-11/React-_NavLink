import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userValidationSchema = Yup.object().shape({
  fname: Yup.string().required('First Name is Required'),
  lname: Yup.string().required('Last Name is Required'),
  gender: Yup.string().required('Gender is Required'),
  course: Yup.string().required('Please select any one course...'),
  languages: Yup.array().of(Yup.string()),
});

function FormikandYup() {
  const handleSubmit = () => {
    alert('Form submitted');
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Formik and Yup Form</h1>
      <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            gender: '',
            course: '',
            languages: [],
          }}
          validationSchema={userValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => {
            return (
              <Form>
                {/* First Name Field */}
                <div className="mb-4">
                  <label htmlFor="fname" className="block text-gray-700 font-bold mb-2">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    name="fname"
                    placeholder="Enter your first Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="fname" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Last Name Field */}
                <div className="mb-4">
                  <label htmlFor="lname" className="block text-gray-700 font-bold mb-2">
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    name="lname"
                    placeholder="Enter your last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="lname" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Gender Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Gender:</label>
                  <div className="flex items-center">
                    <label htmlFor="male" className="mr-2">
                      Male
                    </label>
                    <Field type="radio" name="gender" value="male" id="male" className="mr-4" />
                    <label htmlFor="female" className="mr-2">
                      Female
                    </label>
                    <Field type="radio" name="gender" value="female" id="female" />
                  </div>
                  <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Course Dropdown */}
                <div className="mb-4">
                  <label htmlFor="course" className="block text-gray-700 font-bold mb-2">
                    Course:
                  </label>
                  <Field
                    as="select"
                    name="course"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">---Select a Course---</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Machine Learning">Machine Learning</option>
                  </Field>
                  <ErrorMessage name="course" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Languages Checkboxes */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Languages:</label>
                  <div className="flex items-center">
                    <label htmlFor="C" className="mr-2">
                      C:
                    </label>
                    <Field type="checkbox" name="languages" value="C" id="C" className="mr-4" />
                    <label htmlFor="javaScript" className="mr-2">
                      JavaScript:
                    </label>
                    <Field type="checkbox" name="languages" value="javaScript" id="javaScript" />
                  </div>
                  <ErrorMessage name="languages" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default FormikandYup;
