import {React,useState,useEffect} from 'react'
import Header from "./Header.jsx"
import {Link} from "react-router-dom"
import Footer2 from "./Footer2.jsx"
import { GiShiningHeart } from "react-icons/gi";
import Swiper2 from "./Swiper2.jsx"
import { Navigate} from "react-router-dom"
import { AuthCheck } from './Auth.js'

function Updates() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

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
    isAuthenticated?(<div >
        
        <Header/>
        <div className='w-screen relative'>
               <div className='fixed top-0 left-0 h-screen z-[-1] w-screen bg-[#e2e3e4]'></div>
                <div className='w-[80%]  bg-blue-200 mx-auto flex flex-wrap justify-center rounded-[50px] m-3 p-2'>
                    <div className='lg:w-[40%] w-[80%] flex  flex-col gap-3 justify-center p-2'>
                        <div className='flex justify-start'><h1 className='font-bold lg:text-[40px] text-[20px] font-serif'>Become A Changemaker!</h1></div>
                        <div className='flex justify-start'><p className='lg:text-2xl text-xl font-thin'>Tap into the world of regular donations</p></div>
                        <div className='flex justify-between gap-3 text-center'>
                             <div className='flex flex-col items-center '>
                                <p className='lg:text-[25px] text-[15px] font-bold'>12.9K</p>
                                <p className='lg:text-[20px] text-[10px]'>Lives saved by Dono</p>
                             </div>
                             <div className='flex flex-col items-center'>
                                <p className='lg:text-[25px] text-[15px] font-bold' >1.2M</p>
                                <p className='lg:text-[20px] text-[10px]'>Donors</p>
                             </div>
                             <div className='flex flex-col items-center'>
                                <p className='lg:text-[25px] text-[15px] font-bold'>15.9K</p>
                                <p className='lg:text-[20px] text-[10px]'>Trusted Campaign</p>
                             </div>
                        </div>
                    </div>
                    <div className='lg:w-[40%] w-[80%] flex items-center justify-center flex-col gap-5 p-2'>
                        <div className='h-[70%] w-[80%]  flex justify-center items-center p-3 '>
                             <video className='rounded-[35px] w-[300px]  h-[300px]' src="./video3.mp4 "  autoPlay loop muted/>
                        </div>
                        <div className='flex justify-center items-center w-[80%]'><button className='bg-blue-400 rounded-[10px] text-[15px] p-2 w-[100%]'>Make A Change</button></div>
                    </div>
                </div>
        </div>
        <div className='flex h-[100%]  w-[90%] mx-auto'><Swiper2/></div>


        <div className='px-[2vw] w-full mb-[3vw]'>
            <div className='px-[3vw] font-serif text-[3vw]'>How to Donate?</div>
            <div className='flex flex-wrap justify-center  gap-[1.5vw]'>
                  <div  className='bg-[#79cdd3ec] p-[3vw] rounded-md'>
                    <div></div>
                    <h1 className='text-[1.5vw] font-semibold font-serif'>Select campaign or causes</h1>
                    <p>Find a campaign that you wanna help.</p> 

                  </div>
                  <div  className='bg-[#79cdd3ec] p-[3vw] rounded-md'>
                  <div></div>
                    <h1 className='text-[1.5vw] font-semibold font-serif'>Donate now or monthly</h1>
                    <p>Choose the option of donating now or donating on a monthly basis.</p> 
                  </div>
                  <div  className='bg-[#79cdd3ec] p-[3vw] rounded-md'>
                  <div></div>
                    <h1 className='text-[1.5vw] font-semibold font-serif'>Get regular updates</h1>
                    <p>Post your donation get regular updates on how they are doing.</p> 
                  </div>
            </div> 
            <div className='w-full flex items-center justify-center p-[1vw]'><Link to="/Donation_feed" className='bg-neutral-600 p-[1vw] rounded-[50px] px-[3vw] text-white'>Contribute Now!</Link></div>
        </div>

        <div className='w-full px-[2vw]'>
           <video class="relative  rounded-[30px] mt-[4vw] w-[100%] " src="./video.mp4" autoPlay loop muted ></video>
        </div>


        <div className='flex w-screen flex-col px-2 m-3 '>
            <div className='flex  items-center justify-center gap-2'><p className='lg:text-[60px] text-[30px] font-bold'>Keep Spreading Love!</p><div className='text-red-500 text-[60px]'><GiShiningHeart /></div></div>
            <p className='lg:text-[30px] text-[20px] text-slate-500 flex justify-center'>With Dono’s Social Impact Plan</p>
        </div>
        
        <Footer2/>
    </div>):(< Navigate to="/login"/>)
  )
}

export default Updates