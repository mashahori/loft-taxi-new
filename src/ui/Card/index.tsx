import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ICard {
  children: ReactNode;
  height?: string;
}

export const Card: FC<ICard> = ({ children, height }) => (
  <StyledCard height={height}>{children}</StyledCard>
);

const StyledCard = styled.div<{ height?: string }>`
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  height: ${(p) => p.height ?? "auto"};

  @media (max-width: 440px) {
    padding: 20px;
  }
`;
