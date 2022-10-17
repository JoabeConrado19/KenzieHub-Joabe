import logo from './logo.svg';
import './App.css';
import { StyledTitle } from './styles/typography';
import { LoginPage } from './pages/LoginPage';
import Routes from './Routes/Routes';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";


Modal.setAppElement('#root')


function App() {
  const navigate = useNavigate();


useEffect(()=>{
  if(localStorage.getItem("@KenzieHub_Joabe") != undefined){
    navigate("/dashboard")
    
  }
  
},[])

  return (
    
    <Routes/>
    
  );
}

export default App;
