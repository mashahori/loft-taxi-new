import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 160px;
  left: 70px;
  width: 400px;

  @media (max-width: 440px) {
    width: calc(100% - 40px);
    top: 60px;
    left: 20px;
  }
`;
