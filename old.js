import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState } from "react";


function App() {
  const dark = "bg-gray-500";
  const light = "bg-white";
  const [theme, setTheme] = useState(dark);

  // define dark/light mode
  const changeTheme = () => {
    if (theme == dark) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };
  
  return (
    <>
      <div
        className={`w-full h-[100vh] ${theme} flex flex-col items-center justify-center rounded overflow-hidden relative `}
      >
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          onClick={changeTheme}
          className="text-2xl absolute top-1 right-2 "
        />
        <h1 className="min-w-[550px] py-4  font-bold text-white text-2xl text-center bg-gray-600 border-gray-400 border-b-4 border-b-2">
          Form Validation{" "}
        </h1>
        <Formik
          initialValues={{name:'', email: '', mobile:"", password: '', cpw:"" }}
          validate={values => {
          const errors = {};
          if(!values.name){
            errors.name="required";
          }else if(values.name.length<2){
            errors.name="name should be at least 2 characters long";
          }
          else if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }else if (!values.mobile) {
            errors.mobile  = 'Required';
          }else if(values.mobile.length<10){
            errors.mobile ="should be 10 digits";
          }else if (!values.password) {
            errors.password  = 'Required';
          }else if (values.password.length<6) {
            errors.password  = 'at least 6 characters';
          }else if (!values.cpw) {
            errors.cpw  = 'Required';
          }else if (values.cpw !== values.password) {
            errors.cpw  = 'must be same as password';
          }
          return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
            onSubmit={handleSubmit}
            action="#"
            className="min-w-[550px] bg-gray-600 py-6 flex flex-col items-center gap-4"
          >
            <div className="flex flex-col gap-2 w-96 ">
              <label htmlFor="name" className="text-lg">
                Name:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                type="text"
                id="name"
                placeholder="enter ur name here"
                className="py-2 px-4 rounded"
              />
              <span className="text-red-500">
              {errors.name && touched.name && errors.name}
              </span>
            </div>

            <div className="flex flex-col gap-2 w-96 ">
              <label htmlFor="email" className="text-lg">E-mail:</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="email"
                id="email"
                placeholder="abc@mail.com"
                className="py-2 px-4 rounded"
              />
              <span className="text-red-500">
              {errors.email && touched.email && errors.email}
              </span>
            </div>

            <div className="flex flex-col gap-2 w-96 ">
              <label htmlFor="mobile" className="text-lg"> Mobile No:</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                name="mobile"
                type="mobile"
                id="mobile"
                placeholder="enter ur mobile no here"
                maxLength={10}
                className="py-2 px-4 rounded"
              />
              <span className="text-red-500">
              {errors.mobile && touched.mobile && errors.mobile}
              </span>
            </div>
            <div className="flex flex-col gap-2 w-96 ">
              <label htmlFor="password" className="text-lg"> Password:</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                type="password"
                id="password"
                placeholder="***"
                className="py-2 px-4 rounded"
              />
              <span className="text-red-500">
              {errors.password && touched.password && errors.password}
              </span>
            </div>

            <div className="flex flex-col gap-2 w-96 ">
              <label htmlFor="cpw" className="text-lg"> Confirm Password:</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpw}
                name="cpw"
                type="text"
                id="cpw"
                placeholder="enter same password"
                className="py-2 px-4 rounded"
              />
              <span className="text-red-500">
              {errors.cpw && touched.cpw && errors.cpw}
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-500 px-12 py-4 rounded-lg text-white text-xl font-semibold shadow-lg hover:cursor-pointer hover:scale-95"
            >
              Submit{" "}
            </button>
        </form>
      )}
    </Formik>
      </div>
    </>
  );
}

export default App;