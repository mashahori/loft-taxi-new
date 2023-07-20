import styled from "styled-components";

export const Aside = styled.aside`
  background-color: #1c1a19;
  width: 485px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Main = styled.main`
  background-image: url("/home_bg.svg");
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    background-image: none;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  padding: 55px 112px;

  @media (max-width: 440px) {
    width: 100%;
    padding: 40px;
    text-align: center;
  }
`;
