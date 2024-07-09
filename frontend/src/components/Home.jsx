import {React,useState,useEffect} from 'react'
import Header from "./Header.jsx"
import { Navigate,Link} from "react-router-dom"
import { AuthCheck } from './Auth.js'
import Footer2 from "./Footer2.jsx"

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  var profilepic=localStorage.getItem("profilepic")
  var username=localStorage.getItem("username")
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
        {/* <div className="relative top-0 z-[-2] h-[100%] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_30%_80%_at_50%_40%,rgba(120,119,198,0.5),rgba(255,255,255,0))]"></div> */}
       

        <div className=' px-1 flex flex-col flex-wrap w-screen  justify-center  items-start gap-3 bg-neutral-950 bg-[radial-gradient(ellipse_30%_80%_at_50%_40%,rgba(120,119,198,0.5),rgba(255,255,255,0))]'>
             <div className='flex flex-wrap justify-start items-center p-4'><h1 className='text-white text-5xl font-serif'>Hello {username}</h1></div>
            <div className='flex flex-wrap justify-start items-center p-4'> <p className='text-white text-xl font-thin'>This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid eos atque quo vel perferendis dolore repellat accusamus, est similique, tenetur minus possimus odit maiores non reprehenderit quod officiis sapiente!
             </p></div>
             <div className='flex flex-wrap justify-start items-center text-white p-4'><button className='bg-blue-600 p-2 rounded-[5px]'>Edit Profile</button></div>
             
        </div>
        <div className='flex flex-wrap justify-around items-center px-4  py-2 bg-[rgba(99,169,201,0.5)] gap-[2vw] '>
                    
                     <div  style={{ backgroundImage: `url(${profilepic})` }} className={`lg:h-[300px] lg:w-[300px] min-h-[90px] min-w-[90px]   rounded-full bg-cover bg-white overflow-hidden`}>
                        
                     </div>
                     <div><Link to="/Mydonation" className='bg-purple-500 text-white text-[2.3vw] p-2 rounded-[10px] font-serif'>Donation</Link></div>
                     
            
                     <div className='p-3 rounded-md backdrop-blur-md bg-white/50 h-[40vh] w-[40vh] '>
                         <div className='p-1 w-full h-[10%]'><h1 className='flex justify-center items-center tracking-wider font-serif font-semibold '>RATING</h1></div>
                         <div className='w-full h-[90%]  overflow-auto font-serif'> No Rating To Show... <br/> Donate More For Higher  Rating</div>
                      </div>
        </div>
        <Footer2/>

    </div>):(< Navigate to="/login"/>)
  )
}

export default Home