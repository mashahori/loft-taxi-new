import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { IHeaderItem } from "app/types";

export const Navigation: FC<IHeaderItem> = ({ text, path }) => (
  <StyledLink to={path}>{text}</StyledLink>
);

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 20px 40px;

  &:hover {
    color: #fdbf5a;
  }
`;
