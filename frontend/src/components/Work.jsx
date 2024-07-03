import React from 'react'
import { CgProfile } from "react-icons/cg";
import Header from "./Header.jsx"
import Footer2 from "./Footer2.jsx"
import {motion} from "framer-motion"
import Swiper from "./Swiper.jsx"

function Work() {
  return (
    <div className='relative w-screen'>
        <Header/>
        <div className='fixed top-0 left-0 h-screen z-[-1] w-screen bg-[#e2e3e4]'></div>
        <div className='flex flex-wrap justify-center items-center p-4 font-bold '><h1 className='text-4xl text-blue-600 max-w-[800px] text-center'>Raising Funds was never this easy. Start a fundraiser in 5 minutes!</h1></div>
        <div className=' flex flex-wrap justify-center  items-center mt-[60px]'>
             <div className='lg:w-[60%] w-screen lg:justify-center flex justify-center items-center  pl-4'>
             
                   < Swiper />
                  
             
             </div> 
             <div className='lg:w-[40%] w-screen flex flex-wrap justify-center '>
                 <div className='flex flex-col h-[90vh]  w-1/2 border-solid rounded-[10px] p-4 gap-6 shadow-2xl bg-slate-100'>
                        <div className=''>
                            <div><h1 className='text-black text-center font-serif text-[15px]  font-light lg:tracking-[20px] tracking-[10px]  '><span className='text-[25px] font-bold border-solid border-purple-600 border-[2px] rounded-[100px] pl-2 mx-1'>D</span>oNO</h1></div>
                            <div>
                                <h2 className='text-center font-bold lg:text-2xl text-xl'>We know you are in urgent need of funds.</h2>
                                <p className='text-center font-light lg:text-xl text-[15px]'>Our personal fundraiser expert is waiting to get you started!</p>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                             <div className='flex flex-col gap-4 '>
                                 <p>Full Name</p>
                                  <div className='flex border-b-black border-b-[2px]'><input  className=' outline-none w-[95%]'></input><div className='text-2xl px-1'><CgProfile /></div></div> 
                             </div>
                             <div className='flex flex-col gap-4 '>
                                 <p>Mobile No.</p>
                                  <input  className='border-b-black border-b-[2px] outline-none px-1'></input>
                             </div>
                             <div className='flex flex-col gap-4'>
                                  <p>Fund Purpose</p>
                                  <input placeholder='What will be the funds used for?'  className='border-b-black border-b-[2px] outline-none px-1'></input>
                             </div>
                        </div>
                        
                        <div className='flex flex-col items-center lg:mt-6 mt-1 lg:gap-5 gap-1'>
                            <div><button className='font-bold text-xl lg:text-2xl text-[8px] text-green-500 border-green-500 border-[2px] border-solid lg:p-2 p-1 rounded-[5px]'>GET A CALL</button></div>
                            <div><button className='text-white bg-green-600 font-bold  border-green-500 border-[2px] border-solid lg:p-2 p-1 rounded-[5px]'>CONNECT ON WHATSAPP</button></div>
                        </div>
                 </div>             
             </div> 
        </div>


        <div className='flex flex-col items-center  py-4 my-10 '>
            <motion.p initial={{y:60}}  whileInView={{y:0}} transition={{duration:1}} className='text-center font-bold text-3xl max-w-[400px]'>What is Crowdfunding?</motion.p>
            <motion.p  initial={{y:80}}  whileInView={{y:0}} transition={{duration:1}} className='text-center font-light max-w-[600px] text-xl'>In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.</motion.p>
        </div>

       

       <div className='flex flex-wrap  '>
         <div className='flex lg:w-1/2 w-screen lg:justify-center justify-center   my-6'>
            <motion.div  initial={{y:80}}  whileInView={{y:0}} transition={{duration:1}} className='w-2/3 flex  border-solid border-black border-[2px] justify-center '>
                     <iframe className='p-2' src="https://youtu.be/1Thl3SoHstU?si=isC3cf5ArZYDnS7F"></iframe>
            </motion.div>
         </div>
         <div className='flex lg:w-1/2 w-screen lg:justify-center justify-center'>
              <div className='w-2/3 flex   '>
                   <motion.p initial={{y:80}}  whileInView={{y:0}} transition={{duration:1}} className='text-start text-xl font-light'><span className='font-bold'>So how does Crowdfunding work On Dono?</span>
                   Let us assume an individual, unfortunately, meets with an accident on the road. His medical expenses and hospital bills start piling up. Now he needs ₹5 Lakh to pay his expensive medical bills. Fortunately, his best friend signed up on Ketto’s crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. Now, this campaign can be shared with all his near and dear ones through WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of few minutes, funds start coming in to support the financial needs of the injured friend.</motion.p>
              </div>
         </div>
       </div>




        
        <div className='flex justify-center items-center py-3'><p className='text-center font-bold text-3xl'>Start a Fundraiser in three simple steps</p></div>

        


        <div className='flex flex-wrap p-3'>
         <div className='flex lg:w-1/2 w-screen lg:justify-end justify-center'>
              <motion.div initial={{y:80}}  whileInView={{y:0}} transition={{duration:1}} className='w-2/3 flex flex-col gap-[60px] '>
                    <div>
                        <p className='font-bold text-blue-500 text-2xl'>Start your fundraiser</p>
                        <p className='font-light text-[20px]'>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                    </div>
                    <div>
                        <p className='font-bold text-blue-500 text-2xl'>Share your fundraiser</p>
                        <p className='font-light text-[20px]'>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.
                        Share your fundraiser directly from dashboard on social media.</p>
                    </div>
                    <div>
                        <p className='font-bold text-blue-500 text-2xl'>Withdraw Funds</p>
                        <p className='font-light text-[20px]'>The funds raised can be withdrawn without any hassle directly to your bank account.
                        It takes only 5 minutes to withdraw funds on dono.</p>
                    </div>
              </motion.div>
         </div>
         <div className='flex lg:w-1/2 w-screen lg:justify-start justify-center'>
              <div className='w-2/3 h-[75vh] flex justify-center  lg:justify-end '>
              <video className='rounded-[35px]' src="./video3.mp4 "  autoPlay loop muted/>
              </div>
         </div>
       </div>


        <Footer2/>

    </div>
  )
}

export default Work