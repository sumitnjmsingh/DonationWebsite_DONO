import React,{useState,useRef} from 'react'
import Header from "./Header.jsx"
import {Link} from "react-router-dom"
import { FaSuitcaseMedical } from "react-icons/fa6";

function Create_fund() {
 


  const [avatar, setavatar] = useState(null);




  const [USER,setUser]=useState({
    amount:"",organiser:"",purpose:"",employmentStatus:"",mob:"",category:"",
  })
  let name,value
  const handleinput=(e)=>{
    
     name=e.target.name
     value=e.target.value
     
     setUser({...USER, [name]:value})

  }


  const handleFileChange = (e) => {
    e.preventDefault();
  
    
    setavatar(e.target.files[0]);

  };

const handleformsubmit=async (e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('avatar',avatar );
  formData.append('amount', USER.amount);
  formData.append('organiser', USER.organiser);
  formData.append('employmentStatus', USER.employmentStatus);
  formData.append('mob', USER.mob);
  formData.append('category', USER.category);
  formData.append('purpose', USER.purpose);
 


const res=await fetch("http://localhost:3000/api/users/medical",{
  method:"POST",
  credentials: 'include',
  
  body:formData
});
 const data=await res.json();

  console.log(data.medical.avatar);


};



  return (
    <div>
        <Header/>
        <div className='fixed h-screen w-screen top-0 left-0 z-[-1]'>
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[url('back2.png')] bg-no-repeat bg-cover"></div>
        </div>

        <div className='w-screen h-screen flex flex-col justify-center items-center text-[12px] gap-2'>
          <div className='lg:w-[28%] w-[45%]  h-[30px]  rounded-[10px] flex justify-between p-[1px]  '>
              <select className='w-[30%] h-[100%] border-solid border-[1px]   rounded-[10px] p-1 font-serif'>
                 <option  className='font-serif'>English</option>
                 <option  className='font-serif'>Hindi</option>
                 <option  className='font-serif'>Chinese</option>
              </select>
              <div className='flex w-[40%]     justify-center items-center gap-2'>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white  border-solid border-[2px] border-purple-800'></button></div>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white border-solid border-[2px] border-purple-800'></button></div>
                   <div className='flex items-center'><button className='w-[15px] h-[15px] rounded-[10px] bg-white border-solid border-[2px] border-purple-800'></button></div>
              </div>
          </div>
          <form method='POST' className='flex  flex-col lg:w-[28%] w-[45%] h-[65%] bg-white shadow-md rounded-[5px]  p-1 lg:p-3 gap-1 lg:gap-2 bg-[url("back4.png")] bg-no-repeat bg-cover'>
            <div className='flex justify-center items-center text-center'><p className='font-bold'>Tell us more about your Fundraiser</p></div>
            <hr className='border-solid border-[1px] border-black'></hr>
            <div className='flex justify-center items-center gap-1 lg:gap-2'><div className='text-red-500'><FaSuitcaseMedical /></div><p>Raising funds for <span className='font-bold'>Medical Treatment</span> purpose</p></div>
            <div className='flex flex-col items-start'>
               
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="amount" value={USER.amount} onChange={handleinput} placeholder='How much do you want to raise?' className='w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%]'>
                     <input name="organiser" value={USER.organiser} onChange={handleinput} placeholder='Fund Raiser name..' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="purpose" value={USER.purpose} onChange={handleinput} placeholder='Your Purpose for fund' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="employmentStatus" value={USER.employmentStatus} onChange={handleinput} placeholder='Your Employment Status' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input name="mob" value={USER.mob} onChange={handleinput} placeholder='Your Mobile No.' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input name="category" value={USER.category} onChange={handleinput} placeholder='Enter fund type' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-3'>
                <div><p className='text-[14px]'>Add fundraiser image/video</p></div>
                <div className='flex items-center justify-center border-solid border-black border-[1px]  rounded-[20px] '><input name="avatar"  onChange={handleFileChange} className='rounded-[20px] outline-none text-[8px] lg:text-[10px] text-blue-600 font-serif'  type="file"></input></div>
            </div>
            <div className='flex items-center justify-center '><button onClick={handleformsubmit} className='border-solid border-blue-600 border-[1px] p-2 mt-3   w-[80%] rounded-[20px] bg-blue-500 text-white text-[10px]'>Save and Continue</button></div>
          </form>
        </div>
    </div>
  )
}

export default Create_fund