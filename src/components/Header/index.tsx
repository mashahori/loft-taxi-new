import { useState } from "react";
import { Navigation } from "ui";
import { LogoHeader, MenuBurger, MenuClose, MenuLogout } from "icons";
import { useNavigate, useLocation } from "react-router-dom";

import { HEADER_ITEMS } from "constants/headerItems";
import { IHeaderItem } from "app/types";
import { removeToken } from "services/tokenService";
import { useWindowWidth } from "hooks/useWindowWidth";
import { BREAK_POINT } from "constants/breakPoint";

import * as S from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const width = useWindowWidth();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    removeToken();
    navigate("/auth/login");
  };

  const handleOpenModal = (value: boolean) => setModalOpen(value);

  if (width <= BREAK_POINT) {
    return (
      <S.MobileWrapper>
        <S.MenuPopup position={modalOpen}>
          <S.List>
            {HEADER_ITEMS.map(({ text, path, icon }: IHeaderItem) => (
              <li key={path}>
                <Navigation path={path} currentPath={pathname === `/${path}`}>
                  <S.MobileItem>
                    {icon}
                    <span>{text}</span>
                  </S.MobileItem>
                </Navigation>
              </li>
            ))}
          </S.List>
          <S.Button type="button" onClick={handleLogout}>
            <MenuLogout />
            <span>Log out</span>
          </S.Button>
          <S.ButtonClose type="button" onClick={() => handleOpenModal(false)}>
            <MenuClose />
          </S.ButtonClose>
        </S.MenuPopup>
        <S.MenuBurger type="button" onClick={() => handleOpenModal(true)}>
          <MenuBurger />
        </S.MenuBurger>
      </S.MobileWrapper>
    );
  }

  return (
    <S.Wrapper>
      <Navigation path={"map"}>
        <LogoHeader />
      </Navigation>
      <nav>
        <S.List>
          {HEADER_ITEMS.map(({ text, path }: IHeaderItem) => (
            <li key={path}>
              <Navigation path={path} currentPath={pathname === `/${path}`}>
                {text}
              </Navigation>
            </li>
          ))}
        </S.List>
      </nav>
      <S.Button type="button" onClick={handleLogout}>
        Log out
      </S.Button>
    </S.Wrapper>
  );
};
