import { object, string,ref } from 'yup';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { useState } from 'react';

// define validation schema
let userSchema = object({
  uname: string().min(2).required("required"),
  email: string().email().required("required"),
  mobile:string().matches(/^[0-9]+$/, "Only numbers are allowed")
  .min(10, "Mobile number must be exactly 10 digits")
  .max(10, "Mobile number must be exactly 10 digits")
  .required("Mobile number is required"),
  password:string().min(6).required("required"),
  cpw:string().required("required").oneOf([ref("password"), null], "Passwords must match")
});

// define initial input values
const initialValues={
  uname:"",
  email:"",
  mobile:"",
  password:"",
  cpw:""
}

function App() {

  const dark='bg-gray-500';
  const light='bg-white';
  const [theme,setTheme] = useState(dark);

  // define dark/light mode
  const changeTheme=()=>{
    if(theme ==dark){
      setTheme(light)
    }else{
      setTheme(dark)
    }  
  }

  // define formik function & dstructure methods
  const {values,handleChange,handleBlur,touched,handleSubmit,errors}=useFormik({
    initialValues:initialValues,
    validationSchema:userSchema,
    onSubmit:(values,action)=>{  //stores input values
     console.log(values);
     action.resetForm(); //empty after submit
    }
  })


  return (
    <>
    <div className='w-full h-[100vh] ${theme} flex flex-col items-center justify-center rounded overflow-hidden relative'>
        <FontAwesomeIcon icon={faCircleHalfStroke}
          onClick={changeTheme}
          // onClick={()=>setTheme(theme == dark ? light : dark)}
         className='text-2xl absolute top-1 right-2 '
         />
      <h1 className='min-w-[550px] py-4  font-bold text-white text-2xl text-center bg-gray-600 border-gray-400 border-b-4 border-b-2'>Form Validation </h1>
      <form
        onSubmit={handleSubmit}
         action="#" className='min-w-[550px] bg-gray-600 py-6 flex flex-col items-center gap-4'>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="name" className='text-lg'>Name:</label>
          <input
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.uname}
           name='uname'
           type="text" id='name'placeholder='enter ur name here' className='py-2 px-4 rounded'
           />    
          <span className='text-red-500'>{touched.uname && errors.uname}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="email" className='text-lg'>E-mail:</label>
          <input
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             name='email' 
             type="email" id='email'placeholder='abc@mail.com' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {touched.email && errors.email }</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="mobile" className='text-lg'>Mobile No:</label>
          <input
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.mobile}
            name='mobile' 
            type="tel" id='mobile' placeholder='enter ur mobile no here' maxLength={10} className='py-2 px-4 rounded'/>
          <span className='text-red-500'>{touched.email && errors.mobile}</span>
        </div>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="password" className='text-lg'>Password:</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name='password' 
            type="password" id='password' placeholder='***' minLength={5} className='py-2 px-4 rounded'/>
          <span className='text-red-500'>{touched.email && errors.password} </span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="cpw" className='text-lg'>Confirm Password:</label>
          <input
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.cpw}
            name='cpw' 
            type="text" id='cpw' placeholder='enter same password' className='py-2 px-4 rounded'/>
          <span className='text-red-500'>{touched.email && errors.cpw } </span>
        </div>
                                                                                                                                          
        <button type="submit" className='bg-gray-500 px-12 py-4 rounded-lg text-white text-xl font-semibold shadow-lg hover:cursor-pointer hover:scale-95'>Submit </button>
      </form>
    </div>
    </>
  )
}

export default App