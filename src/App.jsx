import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { useState } from 'react';

function App() {

  const dark='bg-gray-500';
  const light='bg-white';

  const [error,setError] = useState("");

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

   }
  


  const validateInput=(e)=>{
    const name = e.target.value;
    const mail =e.target.value;
    const mobile =e.target.value;
    const pw=e.target.value;
    const cpw=e.target.value;

    if(name === ""){
      setError("name is required")
    }else(
      setError("")
    )

  }




  return (
    <>
    <div className={`w-full h-[100vh] ${theme} flex flex-col items-center justify-center rounded overflow-hidden relative`}>
        <FontAwesomeIcon icon={faCircleHalfStroke}
          onClick={changeTheme}
         className='text-2xl absolute top-1 right-2 '
         />
      <h1 className='min-w-[550px] py-4  font-bold text-white text-2xl text-center bg-gray-600 border-gray-400 border-b-4 border-b-2'>Form Validation </h1>
      <form
         onSubmit={(e)=>validateForm(e)}
         action="#" className='min-w-[550px] bg-gray-600 py-6 flex flex-col items-center gap-4'>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="name" className='text-lg'>Name:</label>
          <input
           onChange={(e)=>validateInput(e)} 
           type="text" id='name'placeholder='enter ur name here' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="email" className='text-lg'>E-mail:</label>
          <input
             onChange={(e)=>validateInput(e)}
             type="email" id='email'placeholder='abc@mail.com' className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="mobile" className='text-lg'>Mobile No:</label>
          <input
            onChange={(e)=>validateInput(e)}
            type="mobile" id='mobile'placeholder='enter ur mobile no here' minLength={10} maxLength={10} className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>
        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="password" className='text-lg'>Password:</label>
          <input
            onChange={(e)=>validateInput(e)}
            type="password" id='password' placeholder='*****' minLength={5} className='py-2 px-4 rounded'/>
          <span className='text-red-500'> {error}</span>
        </div>

        <div className='flex flex-col gap-2 w-96 '>
          <label htmlFor="cpw" className='text-lg'>Confirm Password:</label>
          <input
            onChange={(e)=>validateInput(e)}
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
