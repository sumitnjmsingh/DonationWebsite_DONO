import { askAI } from './AskAI.jsx';
import React, {useState } from 'react'
import { GiCrossedSwords } from "react-icons/gi";

const Chat_ai = ({callback}) => {

    const [currentMsg, setCurrentMsg] = useState('');
    const [data_ai,setdata_ai]=useState("Welcome to Dono ChatBot...")

    const handleButtonClick = async () => {
        
        const data = await askAI(currentMsg);
        console.log(data)
        setdata_ai(data);
      };

    return(
        <>
        <div className='fixed bottom-[20px] right-[20px] h-[400px] w-[250px] bg-blue-100 rounded-[10px] p-2 z-[99999] '>
          <div className='h-[10%] w-[95%] bg-purple-500 rounded-t-[10px] flex justify-center items-center text-white m-1 gap-1'><h1 className='tracking-[5px] font-bold flex'>DONO Chat_AI <div className='p-1  justify-center items-center rounded-[10px] w-[20px] h-[25px]'><button onClick={()=>{
            callback(false)
          }} className=' text-black text-xl '> <GiCrossedSwords /></button></div></h1></div>
          
          <div className='h-[78%] w-[95%] overflow-auto border-solid border-black border-[2px] rounded-[10px]  m-1 p-2'>
          <h1  className='text-[15px]  p-2 '>{data_ai}</h1>
          </div>
        
        
        <div className='flex w-[95%] h-[10%] justify-center items-center border-solid m-1 border-black border-[2px] rounded-[30px] p-1 mb-2'>
          <input className=' w-[70%]  h-[100%] rounded-l-[30px]  p-3 outline-none' 
            
            placeholder="Enter your message"
            type="text"
            value={currentMsg}
            onChange={(e) => setCurrentMsg(e.target.value)}
           
          ></input>
          <button className='bg-green-600 w-[30%] h-[100%] rounded-[30px] text-white text-[10px]' onClick={handleButtonClick}>SEND</button>
          </div>
          
        
          
          

          </div>
          
          
          </>
    )
}

export default Chat_ai