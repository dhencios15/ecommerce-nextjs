import { COLORS, WEIGHTS } from '@/utils/constant';
import styled from 'styled-components';

export default function Bottombar() {
  return (
    <BottomBarWrapper>
      <Title>
        Barato<span>!</span>
      </Title>
    </BottomBarWrapper>
  );
}

const BottomBarWrapper = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  height: 72px;
  align-items: baseline;
`;

const Title = styled.h1`
  font-weight: ${WEIGHTS.bold};
  font-size: 24px;

  span {
    color: ${COLORS.primary};
  }
`;
