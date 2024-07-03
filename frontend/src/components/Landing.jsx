import {React,useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa"
import Card from "./Card.jsx"
import Header from "./Header.jsx"
import Footer2 from "./Footer2.jsx"
import {Link, Navigate} from "react-router-dom"
import { AuthCheck } from './Auth.js'
import {motion} from "framer-motion"
import { patients } from './Image.js'
import Chat_ai from "./Chat_ai.jsx"
import { BsChatTextFill } from "react-icons/bs";



function Landing() {
       const[types,settypes]=useState('Medical');
       const [isAuthenticated, setIsAuthenticated] = useState(null);
       const [chat_tog,setchat_tog]=useState(false)

       useEffect(() => {
         const checkAuth = async () => {
           const authStatus = await AuthCheck();
           setIsAuthenticated(authStatus);
         };
         checkAuth();
       }, []);
   
       if (isAuthenticated === null) {
           return <div>Loading...</div>;
         }
 
  return (
       isAuthenticated?(
    <div className='relative'>
        <Header/>
        {chat_tog?(<Chat_ai callback={setchat_tog}/>):(
          <button onClick={()=>{
            setchat_tog(true)
          }} className=' fixed bottom-[20px] right-[20px]  w-[50px] h-[50px] rounded-full text-10px  p-1'><BsChatTextFill className='text-green-800 text-4xl' /></button>
        )}
        
        <div className='w-screen h-[380px] bg-[url("girl2.jpg")] bg-no-repeat bg-cover bg-center relative   '>
            <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(62,62,79,0.4)] z-[1] '></div>
            <div className='flex flex-col  items-start lg:gap-4 gap-2 lg:p-8 p-4 lg:pl-[150px] pl-[80px] lg:pt-[80px] pt-[50px]  '>
                <div className='flex justify-center items-center text-start text-white p-1 z-[2]'><motion.h1 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0}} className='lg:text-6xl md:text-4xl text-2xl font-bold'>Save A Child Every Month</motion.h1></div>
                <div className='flex justify-center items-center text-start text-white p-1 z-[2]'><motion.p initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} className='lg:text-2xl text-[15px] font-semibold'>Join 421,365 monthly donors with Social Impact Plan and start saving needy children every month </motion.p></div>
                <motion.button initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} className='flex justify-center lg:text-[18px] text-[10px] md:text-[15px]  items-center text-start lg:p-3 p-1 rounded-[5px] z-[2] text-blue-500 font-semibold bg-white'>Start Giving Monthly</motion.button>
            </div>
            
        </div>
        <div className="w-screen   overflow-auto bg-[#e2e3e4] ">
            <div className='flex flex-wrap' >
              <div className='lg:w-[30%] w-1/3'>
                  <div className='flex flex-col items-end h-[90vh]   p-2'>
                                  <div className='lg:w-[60%] w-[90%] min-w-[110px] ml-2  mt-3  bg-slate-100 rounded-[10px] shadow-2xl'>
                                        <div className='flex flex-col' ><button className='lg:text-[20px] text-[15px] p-[3px] font-semibold text-start '>Categories</button>
                                          <hr className='border-solid border-blue-300 border-[1px]' ></hr>
                                        </div>
                                        <div className='flex  flex-col ' ><button className='lg:text-[20px] text-[15px] p-[3px] text-blue-600 text-start'>All Categories</button></div>
                                        <div className='flex flex-col gap-3 p-1 '>
                                        <button onClick={()=>{settypes("Education")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Education</button>
                                        <button onClick={()=>{settypes("Medical")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Medical</button>
                                        <button onClick={()=>{settypes("Women")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Women & Girls</button>
                                        <button onClick={()=>{settypes("Animal")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Animals</button>
                                        <button onClick={()=>{settypes("Creative")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Creative</button>
                                        <button onClick={()=>{settypes("Hunger")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Food & Hunger</button>
                                        <button onClick={()=>{settypes("Environment")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Environment</button>
                                        <button onClick={()=>{settypes("Children")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Children</button>
                                        <button onClick={()=>{settypes("Memorial")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Memorial</button>
                                        <button onClick={()=>{settypes("Others")}} className='lg:text-[18px] text-[15px] p-[3px] text-start focus:bg-[#725555] focus:text-white'>Others</button>
                                        <hr className='border-solid border-blue-300 border-[1px]' ></hr>
                                        </div>
                                        
                                        <div className='flex flex-col mt-3  p-1 pb-3'>
                                           <Link to="/create_fund" className='lg:text-[18px] text-[15px] p-[3px]  text-white bg-blue-400 rounded-[5px]'>Start a Fundraiser</Link>
                                        </div>

                                  </div>
                                  
               </div>
            </div>
            <div className='lg:w-[70%] w-2/3 '>
                 <div className='flex flex-col  p-3 pt-5 '>
                       <div className='flex flex-col'>
                           <div className='flex items-center p-1 gap-2 border-solid border-slate-500 border-[2px] w-[81%] rounded-[10px]' ><input placeholder='Search for Fundraisors' className='w-[100%] h-[40px] border-transparent p-2 outline-none'></input ><div className='text-2xl p-1'><FaSearch /></div></div>
                           <div className='flex flex-wrap mt-2 gap-1 '>
                               <h2 className='font-serif text-[18px]'>Showing fundraisers for</h2>


                               <select  className='border-solid border-black border-[1.5px] rounded-[20px] p-1 outline-none'>
                                   <option disabled selected hidden>All Categories</option>
                                   <option>Education</option>
                                   <option>Medical</option>
                                   <option>Animals</option>
                                   <option>Environment</option>
                                   <option>Children</option>
                               </select>
                               
                               
                               <h2 className='font-serif text-[18px]'>under</h2>

                               <select  className='border-solid border-black border-[1.5px] rounded-[20px] p-1 outline-none'>
                                  <option disabled selected hidden>Trending</option>
                                   <option>All Types</option>
                                   <option>Tax Benefits</option>
                                   <option>Trending</option>
                                   <option>Successfully Funded</option>
                                   <option>Urgently Required</option>
                               </select>

                               <h2 className='font-serif text-[18px]'>from</h2>

                               <select  className='border-solid border-black border-[1.5px] rounded-[20px] p-1 outline-none'>
                                   <option disabled selected hidden>All Locations</option>
                                   <option>Mumbai</option>
                                   <option>Mandi</option>
                                   <option>Varanasi</option>
                                   <option>Bengaluru</option>
                                   <option>New Delhi</option>
                                   <option>Indore</option>
                               </select>

                           </div>
                       </div>
                       <div className='flex flex-wrap mt-4 gap-4'>
                          {  patients
                          .filter(img => img.type == `${types}`)
                          .map((img)=>{
                                 return(
                                      <div className='lg:w-[27%] w-[80%]' key={img.index}>
                                             <Card  img={img.img} purpose={img.purpose} organiser={img.organiser}  />
                                       </div>
                                  )
                          })
                           
                         }
                       </div>
                 </div>
            </div>
              
            </div>
        </div>

       <Footer2/>

    </div>):(< Navigate to="/login"/>)
  )
}

export default Landing