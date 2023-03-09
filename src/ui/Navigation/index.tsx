import { FC, ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface INavigation {
  children: ReactElement | string;
  path: string;
}

export const Navigation: FC<INavigation> = ({ children, path }) => (
  <StyledLink to={path}>{children}</StyledLink>
);

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 20px 40px;

  &:hover {
    color: #fdbf5a;
  }
`;
