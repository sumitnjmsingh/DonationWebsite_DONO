import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer2.jsx"
import Landing from "./components/Landing.jsx"
import Work from "./components/Work.jsx"
import Register from "./components/Register.jsx"
import Create_fund from "./components/Create_fund.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
