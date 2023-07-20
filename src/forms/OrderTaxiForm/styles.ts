import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 440px) {
    gap: 10px;
  }
`;
