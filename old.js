import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { useState } from 'react';

function App() {

  const dark='bg-gray-500';
  const light='bg-white';

  const [error,setError] = useState("");
  const [formData,setformData]= useState({
    uname:"",  //set initial key:value
    email:"",
    mobile:"",
    password:"",
    cpw:""
  })

  const [theme,setTheme] = useState(dark);

  const changeTheme=()=>{
    if(theme ==dark){
      setTheme(light)
    }else{
      setTheme(dark)
    }  
  }


  const validateForm=(e)=>{
   e.preventDefault();
    if(error){
      alert("all fields are mandatory")
    }else{
      alert("Form submitted successfully")
    }  
   }
  
  const validateInput=(e)=>{
    e.target.value === ""; //initial state
    const input = e.target;
    const value= input.value;
    const key=input.name;
    if(value.trim() === ""){
      setError("field can't be empty")
    }else{
      setformData({
        ...formData,  //prev value
        [key]: value   //updated value
        })
      setError("")   //remove error
    }

  }




  return (
    <>
    <div className={`w-full h-[100%] ${theme} flex flex-col items-center justify-center rounded overflowX-hidden p-6 relative`}
     >
        <FontAwesomeIcon icon={faCircleHalfStroke}
          onClick={changeTheme}
         className='text-2xl absolute top-1 right-2 '
         />
      <h1 className='min-w-[550px] py-4  font-bold text-white text-2xl text-center bg-gray-600 border-gray-400 border-b-4 border-b-2'>Form Validation </h1>
      <form
         onSubmit={(e)=>validateForm(e)}
         action="#" className='min-w-[550px] bg-gray-600 py-6 flex flex-col items-center gap-4'>
        <p className='text-white'>{JSON.stringify(formData)}</p>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="name" className='text-lg'>Name:</label>
          <input
           onChange={(e)=>validateInput(e)} 
           name='uname' value={formData.uname}
           type="text" id='name'placeholder='enter ur name here' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="email" className='text-lg'>E-mail:</label>
          <input
             onChange={(e)=>validateInput(e)}
             name='email' value={formData.email}
             type="email" id='email'placeholder='abc@mail.com' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="mobile" className='text-lg'>Mobile No:</label>
          <input
            onChange={(e)=>validateInput(e)}
            name='mobile' value={formData.mobile}
            type="mobile" id='mobile'placeholder='enter ur mobile no here' minLength={10} maxLength={10} className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="password" className='text-lg'>Password:</label>
          <input
            onChange={(e)=>validateInput(e)}
            name ="password" value={formData.password}
            type="password" id='password' placeholder='*****' minLength={5} className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="cpw" className='text-lg'>Confirm Password:</label>
          <input
            onChange={(e)=>validateInput(e)}
            name='cpw' value={formData.cpw}
            type="text" id='cpw' placeholder='enter same password' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <button type="submit" className='bg-gray-500 px-12 py-4 rounded-lg text-white text-xl font-semibold shadow-lg hover:cursor-pointer hover:scale-95'>Submit </button>
      </form>
    </div>
    </>
  )
}

export default App
