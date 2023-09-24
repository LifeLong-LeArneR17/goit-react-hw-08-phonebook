import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomePageStyled = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%; // Увеличьте ширину, чтобы элемент был видимым
`;


export const HomeStyled = styled(NavLink)`
   color: red;
   font-size: 60px;
   text-decoration: none;
`;
