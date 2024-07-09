import { useState,useRef,useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {motion} from "framer-motion";



function Login() {
  const [tog1,settog1]=useState(true);
  const [tog2,settog2]=useState(true);
 

  const elem1=useRef(null);
  const elem2=useRef(null);


  

  const handle1=(e)=>{
    e.preventDefault();
    if(tog1){
    elem1.current.type="text";
     settog1(false);
        }
    else{
        elem1.current.type="password";
        settog1(true);   
        }
  }
  

  const handle2=(e)=>{
    e.preventDefault();
    if(tog2){
        elem2.current.type="text";
         settog2(false);
            }
        else{
            elem2.current.type="password";
            settog2(true);   
            }
  }




  const [USER,setUser]=useState({
    name:"",password:"",conpassword:""
  })

const [err,seterr]=useState("")

  const navigate = useNavigate();
  const [isParentHovered, setIsParentHovered] = useState(false);
  let name,value
  const handleinput=(e)=>{
    
     name=e.target.name
     value=e.target.value
     setUser({...USER, [name]:value})

  }


  const Postdata=async (e)=>{
    e.preventDefault();
    
  const {name,password,conpassword}=USER;
  const res=await fetch("http://localhost:3000/api/users/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    credentials: 'include',
    body:JSON.stringify({
      name,password,conpassword
    })
  });
   const data=await res.json();
   if(res.status==200){
    // console.log(data.user.avatar)
    localStorage.setItem("profilepic",data.user.avatar);
    localStorage.setItem("username",data.user.name);
      navigate(data.redirectTo);
   }
   else{
      
      seterr(data.error);
      console.log(data.error)
      
   }
   };




  

  return (
    <>
    <div className='w-screen h-screen font-serif'>
        <div className='fixed h-screen w-screen top-0 left-0 z-[-1]'>
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-[url('back2.png')] bg-cover bg-no-repeat"></div>
        </div>



       <div className='fixed w-full'>
        <div className='flex justify-between p-4 items-center flex-wrap gap-2  '>
            <div className='flex justify-start items-center'>
               <h1 className='text-white text-[20px] font-light lg:tracking-[20px] tracking-[10px]  '><span  className='text-[25px] font-bold border-solid border-purple-600 border-[2px] rounded-[100px] pl-4 mx-1'>D</span>oNO</h1>
            </div>



     
            <div>
                  <div className='flex items-center gap-1  lg:text-[15px] text-[10px] text-white lg:gap-3 border-b-solid border-b-purple-300 border-b-[1px] rounded-[30px] mb-1'>               
                  <div className='flex items-center justify-center m-1 '>
                          <Link to="/Home"  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[60px] h-[30px] w-[40px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Home<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-60px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 
                      <div className='flex items-center justify-center '>
                          <Link to="/Home"  id="login" className=' flex items-center justify-center  lg:h-[40px] lg:w-[60px] h-[30px] w-[40px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Profile<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-60px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 
                      <div className='flex items-center justify-center '>
                          <Link to="/Donation_feed"  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[110px] h-[30px] w-[75px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Donation_feed<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-120px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 
                     
                      
                   </div>
            </div>
             


            <div className='flex items-center gap-2 lg:gap-4 lg:text-[15px] text-[10px] text-white'>


                      <div className='flex items-center justify-center '>
                          <div  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[60px] h-[30px] w-[40px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Setting<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-60px] z-[-1]  transition-all duration-1 linear'></div></div>
                      </div> 
                      <div className='flex items-center justify-center '>
                          <Link to="/Login"  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[60px] h-[30px] w-[40px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Login<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-60px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 

                      <div className='flex items-center justify-center '>
                          <Link to="/"  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[60px] h-[30px] w-[40px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>SignUp<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-60px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 
                      <div className='flex items-center justify-center '>
                          <Link to="/Payment"  id="login" className=' flex items-center justify-center lg:h-[40px] lg:w-[70px] h-[30px] w-[50px] relative  border-solid border-purple-500 border-[2px] rounded-[40px] p-[3px] overflow-hidden'>Payment<div id="green" className=' h-[100%] w-[100%] absolute bg-[#c4cad0] top-[0px]  left-[-80px] z-[-1]  transition-all duration-1 linear'></div></Link>
                      </div> 

                                       
            </div>




           



           
        </div>
        </div>

      


       <div className='w-[100%] h-[100%]   flex justify-center items-center min-w-[210px]'>
        
          <form method="POST" className='w-[60%] h-[50%]  lg:w-[28%] lg:h-[70%] rounded-[20px] bg-[rgba(86,81,81,0.5)] grid grid-cols-1 grid-rows-[15%_9%_40%_9%_15%_10%] '>
                <div className='flex justify-center items-center text-2xl text-white'><h1 className='font-serif'>Login</h1></div>
                <div className='flex justify-center items-center'><h1 className='text-[15px] text-yellow-500 text-center z-[2334] '>{err}</h1></div>
                <div className='grid grrid-cols-1 grid-rows-4 lg:gap-2 gap-1'>
                      
                      <div className='grid grid-cols-[10%_90%] '>
                           <div className='text-white lg:text-[20px] text-[15px]  flex justify-center items-start mx-[2px]'><MdAlternateEmail /></div>
                           <div className='flex flex-col justify-center '>
                                 <div className='flex justify-start items-center'><label className='text-white lg:text-[14px] text-[10px]  font-serif' >Full Name</label></div>
                                 <div className='flex justify-start items-center '><input onChange={handleinput}  name="name" id="name" autoComplete='off'   value={USER.name} type="text" className='w-[90%] h-[60%] bg-transparent border-b-solid outline-none border-b-purple-300 border-b-[1px] rounded-[10px] text-white px-1'></input></div>
                           </div>
                      </div>
                      <div className='grid grid-cols-[10%_80%_10%]'>
                           <div className='text-white lg:text-[20px] text-[15px]  flex justify-center items-start mx-[2px] '><CiLock /></div>
                           <div className='flex flex-col justify-center '>
                                 <div className='flex justify-start items-center'><label className='text-white lg:text-[14px] text-[10px]  font-serif' >Password</label></div>
                                 <div className='flex justify-start items-center '><input onChange={handleinput}  name="password" id="password" autoComplete='off'  value={USER.password} ref={elem1} type="password" className='w-[100%] h-[60%] bg-transparent border-b-solid outline-none border-b-purple-300 border-b-[1px] rounded-[10px]  px-1 text-white'></input></div>
                           </div>
                           <div className='text-white lg:text-[20px] text-[15px]  flex justify-start items-start mx-[2px]' ><button onClick={handle1}>{(tog1)?<FaRegEyeSlash/>:<FaRegEye />}</button></div>
                      </div>
                      <div className='grid grid-cols-[10%_80%_10%]'>
                           <div className='text-white lg:text-[20px] text-[15px] flex justify-center items-start mx-[2px]'><CiLock /></div>
                           <div className='flex flex-col justify-center '>
                                <div className='flex justify-start items-center'><label className='text-white lg:text-[14px] text-[10px]  font-serif' >Confirm Password</label></div>
                                <div className='flex justify-start items-center '><input onChange={handleinput}  name="conpassword" id="password" autoComplete='off'   value={USER.conpassword} ref={elem2} type="password" className='w-[100%] h-[60%] bg-transparent border-b-solid outline-none border-b-purple-300 border-b-[1px] rounded-[10px] text-white px-1'></input></div>
                           </div>
                           <div className='text-white lg:text-[20px] text-[15px]  flex justify-start items-start mx-[2px]' ><button onClick={handle2}>{(tog2)?<FaRegEyeSlash/>:<FaRegEye />}</button></div>
                      </div>
                </div>
                
                <div className='p-4 flex justify-center items-center'><button onClick={Postdata} className='border-solid border-white border-[1px] rounded-[60px] w-[90%] text-xl text-white bg-neutral-600 font-serif '>Login</button></div>
                <div className='grid grid-cols-1 grid-rows-2'>
                     <div className='flex justify-center items-center'><p className='text-white lg:text-[20px] text-[14px]'>Login in with</p></div>
                     <div className='grid grid-cols-2 grid-rows-1 gap-10'>
                          <div className='flex justify-end items-center'><button className='border-white border-solid border-[1.5px] rounded-[10px] px-2 lg:px-3 py-1 bg-white'><FaFacebook className='lg:text-2xl text-[10px] text-blue-600 font-bold' /></button></div>
                          <div className='flex justify-start items-center'><button className='border-white border-solid border-[1.5px] rounded-[10px] px-2 lg:px-3 py-1 bg-white'>< FcGoogle  className='lg:text-2xl text-[10px]  text-pink-400 font-bold'/></button></div>
                     </div>

                </div>
                <div className='flex justify-around  items-center px-3 gap-[2px] text-white'>
                    <p className='font-serif lg:text-[18px] text-[10px] '>Don't have an account ?</p>
                    <Link to="/"  className='font-serif lg:text-[18px] text-[10px]' >Register Here</Link>
                </div>
         
          </form>
       </div>
       
       


       <div  className='fixed bottom-0 left-0 w-full px-10 py-4'>
          <div className='flex flex-col flex-wrap items-center text-center justify-center text-white'>
              <p className='lg:text-[18px] text-[12px]'>sumit@iitm<span className='text-white lg:text-[20px] text-[12px]'>-2024</span >-Present < FaInstagram  className='text-pink-600  inline'/> <FaFacebook  className='text-blue-700  inline'/>  </p>
              <p className='lg:text-[18px] text-[12px]'>b22137@students.iitmandi.ac.in Get in Touch for more details 88405XXXXX</p>
          </div>
       </div>



        
    </div>
       
    </>
  )
}

export default Login
