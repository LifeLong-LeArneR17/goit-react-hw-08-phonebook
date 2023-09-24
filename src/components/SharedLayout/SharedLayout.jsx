import React from 'react';
import { HomePageStyled, HomeStyled } from './SharedLayoutStyled';
function SharedLayout() {
    return (
      <>
        <nav>
          <HomePageStyled>
            <HomeStyled to="/">Home</HomeStyled>
            <HomeStyled to="/login">About</HomeStyled>
            <HomeStyled to="/register">Products</HomeStyled>
          </HomePageStyled>
        </nav>
      </>
    );
  }
export default   SharedLayout;