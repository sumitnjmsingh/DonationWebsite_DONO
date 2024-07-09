import React,{useState,useEffect} from 'react'
import Header from "./Header.jsx"
import Footer2 from "./Footer2.jsx"
import { LuClipboardSignature } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Card from "./Card.jsx"
import Swiper from "./Swiper.jsx"
import { FaRupeeSign } from "react-icons/fa";

function Mydonation() {
  const [amount,setamount]=useState(null);

  useEffect(() => {
    const fetchamount = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/donation`,{
              credentials: 'include',
            });
            const data = await response.json();
            setamount(data);
            
        } catch (error) {
            console.error('Error fetching amount data:', error);
        }
    };

    fetchamount();
},[]);

    useEffect(() => {
      const checkAuth = async () => {
        const authStatus = await AuthCheck();
        setIsAuthenticated(authStatus);
      };
      checkAuth();
    }, []);
  return (
    <div className='bg-[#e2e3e4]'>
        <Header/>
        <div className='flex justify-center items-center w-screen mt-2 p-3'><p className='font-serif'>My Donations</p></div>
        <div className='flex flex-wrap w-screen  justify-center mb-2 p-2 gap-4'>
            <div className='lg:w-[25%] w-[90%] h-[90vh] bg-white  border-dashed border-[2px] border-green-300 rounded-[15px],flex flex-col items-center p-3 gap-[40px]'>
                <div className='flex justify-center items-center text-lg:[300px] text-[200px]'><LuClipboardSignature /></div>
                <div className='flex flex-wrap flex-col items-start gap-1'>
                    {!amount?(<h1 className='font-bold lg:text-[40px] text-[25px] font-serif'>No Past Donations</h1>):(<h1 className='font-bold lg:text-[40px] text-[25px] font-serif'>Your Donations</h1>)}
                    <div className='p-3 rounded-md backdrop-blur-md bg-white/50 h-[40vh] w-full  '>
                         <div className='p-1 w-full h-[10%]'><h1 className='flex justify-center items-center tracking-wider font-serif font-semibold '>Donations</h1></div>
                        { amount &&(<div className='w-full h-[90%]  overflow-auto font-serif'>  {amount.map((item,index)=>{
                          return (<p key={index} className='text-black'>{index+1}. Your New Donation is... <br/><span className='text-2xl text-green-500 flex items-center'><FaRupeeSign />{item.amount}   
                       </span><br/> Donate More For Higher  Rating <br/></p>) })}</div>)}
                       
                      </div>
                    {!amount &&(<p className='font-light lg:text-[20px] text-[15px]'>Your upcoming contributions will be listed here. Join us in helping people raise funds and building a brighter future!</p>)}
                </div>
                <div className='flex gap-2  p-3'><div><img className='w-[40px] h-[40px] rounded-full ' src="profile1.jpg" ></img></div><p className='text-neutral-600 mt-3'>Trusted by 50 Lakh+ Donors</p></div>
            </div>
            <div className='lg:w-[45%] w-[90%] h-[90vh] bg-white rounded-[15px] shadow-2xl p-1'>
                  <div className='flex justify-between items-center p-2 h-[7vh]'><p className='font-bold text-[2.3vw]'>Start Donating Now!</p><u className='font-semibold text-[2.2vw] text-blue-400'>View More</u></div>
                  <div className='flex h-[70vh] flex-wrap justify-center items-center gap-3 '>
                         <Swiper/>
                            
                  </div>
                  
            </div>
        </div>
        <Footer2/>
    </div>
  )
}

export default Mydonation