import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 300px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 440px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
