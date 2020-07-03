import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  flex: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
`;
const NavLink = styled.div`
  margin: 30px;
  & a {
    text-decoration: none;
  }
`;
function Header() {
  return (
    <Navbar>
      <NavLink>
        <Link to="/">BMI App</Link>
      </NavLink>
      <NavLink>
        <Link to="/catage">Cat Age Convertion App</Link>
      </NavLink>
      <NavLink>
        <Link to="/texttransform">Text Transform App</Link>
      </NavLink>
    </Navbar>
  );
}

export default Header;
