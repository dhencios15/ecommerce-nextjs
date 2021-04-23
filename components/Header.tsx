import React from 'react';
import styled from 'styled-components';

import { Bottombar, Upperbar } from './Navbar';

const Header = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <Upperbar />
        <Bottombar />
      </NavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header``;

const NavWrapper = styled.nav``;

export default Header;
