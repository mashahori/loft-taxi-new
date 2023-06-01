import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #1c1a19;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  color: #fff;
  text-decoration: none;
  padding: 20px 40px;
  cursor: pointer;

  &:hover {
    color: #fdbf5a;
  }
`;
