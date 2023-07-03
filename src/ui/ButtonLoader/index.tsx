import { FC } from "react";
import styled, { keyframes } from "styled-components";

export const ButtonLoader: FC = () => (
  <StyledLoader>
    <span></span>
    <span></span>
    <span></span>
  </StyledLoader>
);

const loaderAnimation = keyframes`
0%, 80%, 100% {
    transform: scale(0);
}
30%, 50% {
    transform: scale(1);
}
`;

const StyledLoader = styled.div`
  span {
    background-color: #fff;
    margin: 0 2px 0;
    border-radius: 100%;
    animation-name: ${loaderAnimation};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
    width: 8px;
    height: 8px;
    display: inline-block;
    vertical-align: middle;

    &:first-child {
      animation-delay: -0.3s;
    }

    &:nth-child(2) {
      animation-delay: -0.15s;
    }
  }
`;
