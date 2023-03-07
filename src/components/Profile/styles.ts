import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
`;

export const Container = styled.div`
  height: 100vh;
  background-image: url("/profile_bg.svg");
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 900px;
  height: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
