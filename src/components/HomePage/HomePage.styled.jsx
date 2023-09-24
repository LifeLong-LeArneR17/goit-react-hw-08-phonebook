import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
   display: flex;
  justify-content: center;
  flex-direction: column; /* Змінено на row для розташування елементів в одному ряду */
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`

export const StyledLink = styled(NavLink)`
   color: black;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-size: 40px;
  display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

  &:hover {
    color: black;
    background-color:orange ;
    border-radius: 10% 30% 50% 70%;
  }

  &.active {
    color: orange;
    font-weight: bold;
  }
`;

