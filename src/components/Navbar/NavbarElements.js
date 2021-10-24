import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  color: white;
  height: 7.5vh;
  //margin-top: -80px;
  font-size: 1rem;
  z-index: 10;
  padding:5px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.5vh;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
  max-width: 1100px;
`;

export const NavLogo = styled.a`
  color:white;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 15%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  transform: translate(0%, 13%);
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;

  /* &.active {
    border-bottom: 3px solid #01bf71;
  } */
  &:hover {
    color: whitesmoke;
    display: flex;
  }
  &:focus {
    color: #999;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  transform: translate(10%, 25%);
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 40px;
  background: #001745;
  border-style: solid;
  border-color: white;
  border-width: 0.15rem;
  color: #10bf71;
  border-color: #10bf71;
  white-space: nowrap;
  padding: 0.3rem 0.4rem;
  //color: #010606;
  font-size: 1rem;
  outline: none;

  cursor: pointer;
  transition: all 0.2s ease-in-ease-out;
  //text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #001745;
    color: #10bf71;
    border-style: groove;
    border-width: 0.15rem;
    border-color: #10bf71;
  }
  /* &:active {
    border-color: #10bf71;
    background-color: #001745;
    color: #10bf71;
  } */
  &:focus {
    border-color: #10bf71;
    background-color: #001745;
    color: #10bf71;
  }
  /* &:visited {
    border-color: #10bf71;
    background-color: #10bf71;
  } */
`;