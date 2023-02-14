import { FC } from "react";
import styled from "styled-components";

export const Card: FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
`;
