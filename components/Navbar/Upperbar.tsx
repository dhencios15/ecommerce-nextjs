import styled from 'styled-components';
import {
  SearchIcon as SearchICON,
  ShoppingBagIcon as ShoppingBagICON,
} from '@heroicons/react/outline';

import { COLORS } from '@/utils/constant';

export default function Upperbar() {
  return (
    <UpperbarWrapper>
      <p>Free Shipping on domestic orders over $75!</p>
      <SearchBar>
        <SearchIcon />
        <SearchInput type='text' placeholder='Search...' />
      </SearchBar>
      <HelpLink>Help</HelpLink>
      <ShoppingBagIcon />
    </UpperbarWrapper>
  );
}

const UpperbarWrapper = styled.div`
  display: flex;
  background-color: ${COLORS.gray[900]};
  padding: 12px 32px;
  align-items: center;
  height: 40px;
  gap: 27px;
  padding: 0px 32px;

  p {
    color: ${COLORS.white};
    font-size: 14px;
    margin-right: auto;
  }
`;

const SearchBar = styled.div`
  padding-bottom: 6px;
  display: flex;
  border-bottom: 1px solid #c9cecf;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  color: ${COLORS.white};
  outline-offset: 4px;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(SearchICON)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  color: ${COLORS.white};
`;
const ShoppingBagIcon = styled(ShoppingBagICON)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  color: ${COLORS.gray[300]};

  &:hover {
    color: ${COLORS.white};
    cursor: pointer;
  }
`;

const HelpLink = styled.a`
  color: ${COLORS.gray[300]};
  font-size: 14px;

  &:hover {
    color: ${COLORS.white};
    cursor: pointer;
    border-bottom: 1px solid ${COLORS.white};
  }
`;
