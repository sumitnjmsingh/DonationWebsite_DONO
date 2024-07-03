import {React,useState,useEffect} from 'react'
import Header from "./Header.jsx"
import { Navigate} from "react-router-dom"
import { AuthCheck } from './Auth.js'

function Home() {
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
                <div className="absolute top-0 z-[-2] h-[80vh] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_30%_80%_at_50%_40%,rgba(120,119,198,0.5),rgba(255,255,255,0))]"></div>
       

        <div className=' px-1 flex flex-col flex-wrap w-screen h-[80vh] justify-center  items-start gap-3 '>
             <div className='flex flex-wrap justify-start items-center p-4'><h1 className='text-white text-5xl font-serif'>Hello Sumit Rajpoot</h1></div>
            <div className='flex flex-wrap justify-start items-center p-4'> <p className='text-white text-xl font-thin'>This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid eos atque quo vel perferendis dolore repellat accusamus, est similique, tenetur minus possimus odit maiores non reprehenderit quod officiis sapiente!
             </p></div>
             <div className='flex flex-wrap justify-start items-center text-white p-4'><button className='bg-blue-600 p-2 rounded-[5px]'>Edit Profile</button></div>
             
        </div>
        <div className='flex justify-center items-center px-4  h-[250px] bg-[rgba(141,163,238,0.5)] gap-[70%] relative'>
                     <div className='absolute bottom-[50%] left-[50%] translate-x-[-50%]   lg:h-[300px] lg:w-[300px] h-[180px] w-[180px]  rounded-full bg-white overflow-hidden'>
                        <img src="./profile1.jpg" />
                     </div>

                     <div><button className='bg-purple-500 text-white p-3 rounded-[10px]'>Connect</button></div>
                     <div><button className='bg-slate-600 text-white p-3 rounded-[10px]'>Message</button></div>
             </div>

    </div>):(< Navigate to="/login"/>)
  )
}

export default Home