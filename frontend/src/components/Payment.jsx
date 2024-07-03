import {React,useState,useEffect} from 'react'
import Header from "./Header.jsx"
import Footer2 from "./Footer2.jsx"
import { AiOutlineAlipay } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa6";
import { Navigate} from "react-router-dom"
import { AuthCheck } from './Auth.js'

function Payment() {
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
    isAuthenticated?(<div>
        <Header/>
        <div className='flex justify-center items-center w-screen h-[90vh] bg-[url("back5.png")] bg-center bg-no-repeat bg-cover flex-col'>
        <div className='flex items-center gap-2'><div className='text-blue-500 text-4xl'><FaPaypal /></div><div className='text-blue-500 text-4xl'><AiOutlineAlipay /></div><p className='text-2xl font-thin'>Pay Through PhonePay</p></div>
            <div className='flex  justify-center items-center p-6 relative'>
                
                <div className='absolute top-[0%] left-[50%] w-[300px] h-[350px] bg-gradient-to-r from-purple-600 via-slate-300 to-blue-600  rounded-br-[80px]  z-[1]'></div>
                <img src="payment.jpg" className='w-[300px] h-[300px] z-[2]'></img>
                <div className='absolute top-[0%] right-[50%] w-[300px] h-[350px] bg-gradient-to-r from-blue-800 via-slate-300 to-purple-600 rounded-tl-[80px] z-[1]'></div>
            </div>
            <div className='flex flex-wrap justify-center items-center p-1'><p className='font-bold font-serif text-3xl '>Donate for Healthy World</p></div>
        </div>
        <Footer2/>
    </div>):(< Navigate to="/login"/>)
  )
}

export default Payment