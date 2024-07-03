import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Footer2() {
  return (
    <div>
        <div className='flex flex-wrap items-center justify-center w-screen   bg-[#039695] lg:gap-[50px] gap-[20px] text-white pb-3 px-3 pt-5'>
              <div className='flex flex-col items-start gap-4 lg:text-[15px] text-[10px]'>
                   <div><h1 className='text-black  font-serif text-[20px] font-bold lg:tracking-[20px] tracking-[10px]  '><span className='text-[25px] font-bold border-solid border-purple-600 border-[2px] rounded-[100px] pl-4 mx-1'>D</span>oNO</h1></div>
                   <hr className='border-solid border-white border-[1px] lg:w-[180px] w-[140px] '></hr>
                   <div className='flex gap-4 text-2xl'>< FaInstagram className='text-pink-700'/><FaFacebook className='text-blue-900'/><FaInstagram className='text-pink-700'/><FaFacebook className='text-blue-900 '/></div>
                   <p className='font-bold'>For any queries</p>
                   <p className='font-bold'>Email: info@dono.org</p>
                   <p className='font-bold'>Contact No: +91 9930088522</p>
              </div>
              <div className='flex flex-col items-start gap-3 font-semibold lg:text-[15px] text-[10px]'>
                 <button className='font-bold text-black'>Medical crowdfunding</button>  
                 <button>Cancer Crowdfunding</button>  
                 <button>Child Welfare</button>  
                 <button>Transplant Crowdfunding</button>  
                 <button>Animal Fundraisers</button>  
                 <button>Education Crowdfunding</button>  
                 <button>Sports Crowdfunding</button>  
              </div>
              
              <div className='flex flex-col items-start gap-3 font-semibold lg:text-[15px] text-[10px]'>
                  <button className='font-bold text-black'>Fundraising for NGOs</button>
                  <button>Sponsor A Child</button>
                  <button>Fundraising Tips</button>
                  <button>What is Crowdfunding?</button>
                  <button>Corporates</button>
                  <button>Withdraw Funds</button>
                  <button>Browse Fundraiser</button>
              </div>
              <div className='flex flex-col items-start gap-3 font-semibold lg:text-[15px] text-[10px]'>
                  <button className='font-bold text-black'>Team Dono</button>
                  <button>In The News</button>
                  <button>Web Stories</button>
                  <button>Careers</button>
                  <button>Dono Blog</button>
                  <button>Success Stories</button>
                  <button>Is Ketto Genuine?</button>
              </div>
              <div className='flex flex-col items-start gap-3 font-semibold lg:text-[15px] text-[10px]'>
                   <button className='font-bold text-black'>Medical Finance</button>
                   <button>FAQs & Help Center</button>
                   <button>Are Ketto Campaigns Genuine?</button>
                   <button>Fundraiser Video</button>
                   <button>Trust & Safety</button>
                   <button>Plans & Pricing</button>
                   <button>Contact Us</button>
              </div>
        </div>
    </div>
  )
}

export default Footer2