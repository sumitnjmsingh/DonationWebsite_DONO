import { useState } from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import './App.css'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import Landing from "./components/Landing.jsx"
import Work from "./components/Work.jsx"
import Header from "./components/Header.jsx"
import Footer2 from "./components/Footer2.jsx"
import Create_fund from "./components/Create_fund.jsx"
import NGO_Charity from "./components/NGO_Charity.jsx"
import Other_Cause from "./components/Other_Cause.jsx"
import Mydonation from "./components/Mydonation.jsx"
import Payment from "./components/Payment.jsx"
import Updates from "./components/Updates.jsx"


function App() {
  

  return (
    <>
   
     <Router>
      <Routes>
          <Route  path="/" element={<Register/>}></Route> 
          <Route  path="/Payment" element={<Payment/>}></Route> 
          <Route  path="/Updates" element={<Updates/>}></Route> 
          <Route  path="/Login" element={<Login/>}></Route> 
          <Route  path="/Home" element={<Home/>}></Route> 
          <Route  path="/Mydonation" element={<Mydonation/>}></Route> 
          <Route path="/Donation_feed"  element={<Landing/>}></Route>
          <Route path="/working_procedure" element={<Work/>}/>
          <Route path="/create_fund" element={<Create_fund/>}/>
          <Route path="/NGO_Charity" element={<NGO_Charity/>}/>
          <Route path="/Other_Cause" element={<Other_Cause/>}/>
          
          
      </Routes>  
        
     </Router>   
    
       
    </>
  )
}

export default App
