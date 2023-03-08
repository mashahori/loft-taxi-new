import styled from "styled-components";

export const Date = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export const Number = styled.span`
  align-self: flex-start;
`;

export const Wrapper = styled.div`
  background-image: url("/card-bg-1.svg");
  background-repeat: no-repeat;
  background-position: 18px 28px;
  width: 347px;
  height: 182px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  padding: 27px 16px 16px 27px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  align-items: flex-end;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 29px;
    height: 26px;
    background-image: url("/card-bg-2.svg");
    bottom: 16px;
    left: 28px;
  }

  ::after {
    content: "";
    position: absolute;
    width: 45px;
    height: 30px;
    background-image: url("/card-bg-3.svg");
    bottom: 16px;
    right: 16px;
  }
`;
