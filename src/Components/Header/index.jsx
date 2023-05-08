import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { colorPrimario } from "../UI/Variables";
import { Link } from "react-router-dom";
import "./header.css"
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const StyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;

  width: 100%;
  position:fixed;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

const Logo = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`

const BtnPrimario = styled(Link)`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${colorPrimario};
  background: white;
`
const BtnSalir = styled(BtnPrimario)`
  color: white;
  background: ${colorPrimario};
`

const Header = () => {
  return (
    <>
      <BurgerMenu />
      <StyledHeader>
        <Link to="#" className="flex-link">
          <Logo src={logo} alt="Logo Smart Bank" />
          <h1 className="bank-icon">Smart Bank</h1>
        </Link>
        <div className="btn-container">
          <BtnPrimario to="/">Home</BtnPrimario>
          <BtnPrimario to="/account">Account</BtnPrimario>
          <BtnPrimario to="/help">Help</BtnPrimario>
          <BtnSalir to="/signout">Sing out</BtnSalir>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;