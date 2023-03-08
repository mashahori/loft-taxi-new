import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ICard {
  children: ReactNode;
  height?: number;
}

export const Card: FC<ICard> = ({ children, height }) => (
  <StyledCard height={height}>{children}</StyledCard>
);

const StyledCard = styled.div<{ height?: number }>`
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  height: ${(p) => p.height}px;
`;
