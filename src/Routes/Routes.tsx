import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/Dashboard';
import { LoginPage } from '../pages/LoginPage';
import { Register } from '../pages/RegisterPage'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';



const RoutesMain = () => {
        
      return(  <Routes >
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/cadastro' element={ <Register/> } />
            <Route path='/dashboard' element={ <LandingPage /> } />
            <Route path='*' element={ <h2>Not Found</h2> } />

        </Routes>)
    
}

    export default RoutesMain


