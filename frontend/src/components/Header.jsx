import {React,useState} from 'react'
import { FaSearch } from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const navigate=useNavigate();
  var profilepic=localStorage.getItem("profilepic") || localStorage.getItem("avatar");
  var username=localStorage.getItem("username") || localStorage.getItem("username1");
    const handleoptionclick1=(event)=>{
    const selectedvalue=event.target.value;
    
    navigate(`/${selectedvalue}`)
}


const LogoutResponse= async()=>{
  
              
  const response=await fetch("http://localhost:3000/api/users/logout",{
   method:"POST",
   headers:{
        "Content-Type":"application/json"
      },
       credentials: 'include'
  })

  const data=await response.json();
  console.log(data.message)
  navigate("/login");
}

  const handleoptionclick2=(event)=>{
      const selectedvalue=event.target.value;
      if(selectedvalue==="Logout"){
     
        LogoutResponse();
             }
      else{
        
      navigate(`/${selectedvalue}`)}
  }

  return (
    <div className='sticky top-0 left-0 z-[4] '>
        <div className='flex flex-wrap  w-screen  justify-around items-center bg-slate-300 p-1 '>
            <div><h1 className='text-black font-serif text-[20px]  font-light lg:tracking-[20px] tracking-[10px]  '><Link to="/Updates" className='text-[25px] font-bold border-solid border-purple-600 border-[2px] rounded-[100px] pl-4 mx-1'>D</Link>oNO</h1></div>
            <div className='flex justify-between gap-4 lg:text-[15px] text-[10px]'>
                <Link to="/Donation_feed"><h2 className='font-serif'>Browse Fundraisers</h2></Link>
                <div><select onChange={handleoptionclick1} className='font-serif bg-transparent'>
                            <option  value='Fundraise For'disabled selected  hidden>Fundraise For</option>
                            <option value="create_fund">Medical Treat</option>
                            <option value="NGO_Charity">NGO/Charity</option>
                            <option value="Other_Cause">Other Cause</option>
                            <option value="DonationForm">Donation Form</option>
                     </select>
                  </div>
                <Link to="/working_procedure"><h2 className='font-serif'>How It Works </h2></Link>
                <div className='flex items-center'><div className='pr-2'><FaSearch /></div><h2 className='font-serif'>Search</h2></div>
            </div>
            <div className='flex items-center gap-2 lg:text-[15px] text-[10px]'><Link to="/create_fund" className='border-solid border-blue-700 border-[1px] rounded-[30px] p-2 text-blue-700 font-serif'>Start a Fundraiser</Link><div ><img className='w-[40px] h-[40px] rounded-full ' src={profilepic} ></img></div><div ><select onChange={handleoptionclick2} className='border-solid border-blue-600 border-[1.5px] rounded-[30px] p-2 bg-transparent'>
                 
                 <option value={username} className='font-bold'>{username}</option>
                 <option value="">Register</option>
                 <option value="Home" >View Profile</option>
                
                 <option value="Get us on Whatsapp" className='text-green-600 font-bold '>Get us on Whatsapp</option>
                 <option value="Mydonation">My Donations</option>
                 
                 
                 <option value="Logout" className='text-red-600 font-bold'>Logout</option>
              </select></div></div>
        </div>
    </div>
  )
}

export default Header