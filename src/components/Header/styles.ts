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

  @media (max-width: 440px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Button = styled.button`
  color: #fff;
  text-decoration: none;
  padding: 20px 40px;
  cursor: pointer;

  &:hover {
    color: #fdbf5a;
  }

  @media (max-width: 440px) {
    color: #000;
    padding: 10px 40px;
    display: flex;
    gap: 10px;
  }
`;

export const MobileWrapper = styled.header``;

export const MenuPopup = styled.div<{ position: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 200;
  position: absolute;
  transform: ${(p) => (p.position ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease;
`;

export const MenuBurger = styled.button`
  position: absolute;
  z-index: 100;
  top: 20px;
  left: 20px;
`;

export const MobileItem = styled.button`
  display: flex;
  gap: 10px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`;
