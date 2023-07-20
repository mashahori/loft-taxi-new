import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
`;

export const Container = styled.div`
  height: calc(100vh - 104px);
  background-image: url("/profile_bg.svg");
  display: flex;
  justify-content: center;
  padding-top: 40px;

  @media (max-width: 440px) {
    padding-bottom: 40px;
    height: 100%;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  min-width: 900px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 440px) {
    min-width: auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 40px;
  }
`;
