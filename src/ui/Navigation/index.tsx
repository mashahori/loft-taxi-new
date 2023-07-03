import { FC, ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface INavigation {
  children: ReactElement | string;
  path: string;
  currentPath?: boolean;
}

export const Navigation: FC<INavigation> = ({
  children,
  path,
  currentPath = false,
}) => (
  <StyledLink to={path} $active={currentPath}>
    {children}
  </StyledLink>
);

const StyledLink = styled(Link)<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "#fdbf5a" : "#fff")};
  text-decoration: none;
  padding: 20px 40px;

  &:hover {
    color: #fdbf5a;
  }
`;
