import React,{useState} from 'react'
import Header from "./Header.jsx"
import {Link} from "react-router-dom"
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import toast from "react-hot-toast";

function NGO_Charity() {




     const [USER,setUser]=useState({
       amount:"",category:"",orgname:"",employmentStatus:"",mob:"",qualification:"",dono_knowledge:"",
     })
     let name,value
     const handleinput=(e)=>{
       
        name=e.target.name
        value=e.target.value
        
        setUser({...USER, [name]:value})
   
     }
   
   
   
   const handleformsubmit=async (e)=>{
     e.preventDefault();
     const formData = new FormData();
     formData.append('amount', USER.amount);
     formData.append('category', USER.category);
     formData.append('employmentStatus', USER.employmentStatus);
     formData.append('mob', USER.mob);
     formData.append('dono_knowledge', USER.dono_knowledge);
     formData.append('orgname', USER.orgname);
     formData.append('qualification', USER.qualification);
    
//    console.log(formData)
   
   const res=await fetch("http://localhost:3000/api/users/ngo_charity",{
     method:"POST",
     credentials: 'include',
     
     body:formData
   });
    const data=await res.json();
     toast("Data saved Successfully")
     // console.log(data.ngo_charity);
   
   
   };



  return (
    <div>
        <Header/>
        <div className='fixed h-screen w-screen top-0 left-0 z-[-1]'>
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[url('back2.png')] bg-no-repeat bg-cover"></div>
        </div>

        <div className='w-screen h-screen flex flex-col justify-center items-center text-[12px] gap-2'>
          <div className='lg:w-[28%] w-[45%]  h-[30px]  rounded-[10px] flex justify-between p-[1px] '>
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
          <form method='POST' className='flex  flex-col lg:w-[28%] w-[45%] h-[65%] bg-white shadow-md rounded-[5px] p-1 lg:p-3 gap-1 lg:gap-2 bg-[url("back4.png")] bg-no-repeat bg-cover'>
            <div className='flex justify-center items-center text-center'><p className='font-bold'>Tell us more about your Fundraiser</p></div>
            <hr className='border-solid border-[1px] border-black'></hr>
            <div className='flex justify-center items-center gap-1 lg:gap-2'><div className='text-blue-500 text-[15px]'><FaGlobe /></div><p>Raising funds for <span className='font-bold'>NGO/Charity</span> purpose</p></div>
            <div className='flex flex-col items-start'>
               
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="amount" value={USER.amount} onChange={handleinput} placeholder='How much do you want to raise?' className='w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%]'>
                     <input name="category" value={USER.category} onChange={handleinput} placeholder='Fundraiser Title' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%]'>
                     <input name="orgname" value={USER.orgname} onChange={handleinput} placeholder='NGO Name' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="qualification" value={USER.qualification} onChange={handleinput} placeholder='Your Education Qualification' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                     <input name="employmentStatus" value={USER.employmentStatus} onChange={handleinput} placeholder='Your Employment Status' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input name="mob" value={USER.mob} onChange={handleinput} placeholder='Your Mobile No.' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
                <div className='flex items-start justify-center p-1 w-[90%] '>
                    <input name="dono_knowledge" value={USER.dono_knowledge} onChange={handleinput} placeholder='How did you first hear about Dono?' className=' w-[90%] border-b-solid border-b-black border-b-[1px] outline-none p-1'></input>
                </div>
            </div>
            
            <div className='flex items-center justify-center '><button onClick={handleformsubmit} className='border-solid border-blue-600 border-[1px] p-2 mt-3   w-[80%] rounded-[20px] bg-blue-500 text-white text-[10px]'>Save and Continue</button></div>
          </form>
        </div>
    </div>
  )
}

export default NGO_Charity