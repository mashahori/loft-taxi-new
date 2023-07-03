import { Navigation } from "ui";
import { LogoHeader } from "icons";
import { useNavigate, useLocation } from "react-router-dom";

import { HEADER_ITEMS } from "constants/headerItems";
import { IHeaderItem } from "app/types";
import { removeToken } from "services/tokenService";

import * as S from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    removeToken();
    navigate("/auth/login");
  };

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
