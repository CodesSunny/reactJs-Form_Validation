import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState } from "react";

function App() {
  const dark = "bg-gray-500";
  const light = "bg-white";
  const defaultFields = {
    uname: "",
    email: "",
    mobile: "",
    password: "",
    cpw: "",
  };

  const [formData, setFormData] = useState(defaultFields);
  const [formError, setFormError] = useState(defaultFields);

  const formErrorConditions = {
    required: {
      uname: "Name is required",
      email: "Email is required",
      mobile: "Mobile is required",
      password: "Password is required",
      cpw: "Confirm Password is required",
    },
    minLength: {
      password: {
        value: 6,
        message: "Password must be 6 characters long",
      },
    },
    pattern: {
      email: {
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
      mobile: {
        regex: /^[0-9]{10}$/,
        message: "Invalid mobile number",
      },
    },
  };

  const [theme, setTheme] = useState(dark);

  // define dark/light mode
  const changeTheme = () => {
    if (theme == dark) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  const validateField = (key, value) => {
    return new Promise((resolve, reject) => {
      if (key === "cpw") {
        if (value !== formData.password) {
          reject("Password does not match");
        } else resolve();
      } else {
        if (formErrorConditions.required[key] && !value) {
          reject(formErrorConditions.required[key]);
        } else if (
          formErrorConditions.minLength[key] &&
          value.trim().length < formErrorConditions.minLength[key].value
        ) {
          reject(formErrorConditions.minLength[key].message);
        } else if (
          formErrorConditions.pattern[key] &&
          !formErrorConditions.pattern[key].regex.test(value)
        ) {
          reject(formErrorConditions.pattern[key].message);
        } else {
          resolve();
        }
      }
    });
  };

  const handleChange = async (e) => {
    const { name, value } = e.target; //e.target returns input object
    try {
      setFormData({ ...formData, [name]: value });
      await validateField(name, value);
      setFormError((prev) => {
        delete prev[name];
        return { ...prev };
      });
    } catch (error) {
      setFormError({ ...formError, [name]: error });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (Object.keys(formError).length === 0) {
      alert("form submitted successfully");
      setFormData(defaultFields);
    } else {
      alert("please validate form before submitting");
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
        {/* <p className='text-white'>{JSON.stringify(formData)}</p> */}
        <form
          onSubmit={submitForm}
          action="#"
          className="min-w-[550px] bg-gray-600 py-6 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col gap-2 w-96 ">
            <label htmlFor="name" className="text-lg">
              Name:
            </label>
            <input
              onChange={handleChange}
              name="uname"
              value={formData.uname}
              type="text"
              id="name"
              placeholder="enter ur name here"
              className="py-2 px-4 rounded"
            />
            <span className="text-red-500">{formError.uname}</span>
          </div>

          <div className="flex flex-col gap-2 w-96 ">
            <label htmlFor="email" className="text-lg">
              E-mail:
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="email"
              id="email"
              placeholder="abc@mail.com"
              className="py-2 px-4 rounded"
            />
            <span className="text-red-500">{formError.email}</span>
          </div>

          <div className="flex flex-col gap-2 w-96 ">
            <label htmlFor="mobile" className="text-lg">
              Mobile No:
            </label>
            <input
              onChange={handleChange}
              name="mobile"
              value={formData.mobile}
              type="mobile"
              id="mobile"
              placeholder="enter ur mobile no here"
              minLength={10}
              maxLength={10}
              className="py-2 px-4 rounded"
            />
            <span className="text-red-500">{formError.mobile}</span>
          </div>
          <div className="flex flex-col gap-2 w-96 ">
            <label htmlFor="password" className="text-lg">
              Password:
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={formData.password}
              type="password"
              id="password"
              placeholder="***"
              className="py-2 px-4 rounded"
            />
            <span className="text-red-500">{formError.password}</span>
          </div>

          <div className="flex flex-col gap-2 w-96 ">
            <label htmlFor="cpw" className="text-lg">
              Confirm Password:
            </label>
            <input
              onChange={handleChange}
              name="cpw"
              value={formData.cpw}
              type="text"
              id="cpw"
              placeholder="enter same password"
              className="py-2 px-4 rounded"
            />
            <span className="text-red-500">{formError.cpw}</span>
          </div>

          <button
            type="submit"
            className="bg-gray-500 px-12 py-4 rounded-lg text-white text-xl font-semibold shadow-lg hover:cursor-pointer hover:scale-95"
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;