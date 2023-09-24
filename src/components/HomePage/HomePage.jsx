import React from 'react';
import { Container } from './HomePage.styled';
import { StyledLink } from './HomePage.styled';
import {  Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
 <Container>
      <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 256 256">
          <g fill="#a66546" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
            <g transform="scale(5.12,5.12)">
              <path d="M24.96094,1.10156c-0.20852,0.00805 -0.4093,0.08112 -0.57422,0.20898l-23,17.90039c-0.29773,0.21363 -0.45479,0.57298 -0.40934,0.93659c0.04544,0.36361 0.28611,0.67326 0.62726,0.80704c0.34115,0.13378 0.72815,0.07028 1.00865,-0.16551l1.38672,-1.08008v26.29102c0.00006,0.55226 0.44774,0.99994 1,1h13.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h13.8418c0.55226,-0.00006 0.99994,-0.44774 1,-1v-26.29102l1.38672,1.08008c0.2805,0.23579 0.6675,0.2993 1.00865,0.16551c0.34115,-0.13378 0.58181,-0.44343 0.62726,-0.80704c0.04544,-0.36362 -0.11161,-0.72297 -0.40935,-0.93659l-7.64453,-5.94922c0.02192,-0.08548 0.03243,-0.17348 0.03125,-0.26172v-6c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-3.90039c-0.55226,0.00006 -0.99994,0.44774 -1,1v1.69336l-9.48633,-7.38281c-0.18607,-0.14428 -0.41707,-0.21828 -0.65234,-0.20898zM25,3.36719l19,14.78711v26.8457h-12v-18c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-12c-0.29504,-0.00368 -0.57665,0.1231 -0.76947,0.34644c-0.19283,0.22333 -0.27719,0.52042 -0.23053,0.81177v17.8418h-12v-26.8457zM37.09961,8h1.90039v3.72852l-1.90039,-1.47852zM20,28h10v17h-10z"></path>
            </g>
          </g>
        </svg>
        <h1>MY PHONEBOOK</h1>
     <div>
          <StyledLink to="/login">LOGIN</StyledLink>
          {/* <StyledLink to="/register">REGISTER</StyledLink> */}
     </div>
 </Container>

   

 <Outlet/>

    </>
    
  );
};

export default HomePage;
