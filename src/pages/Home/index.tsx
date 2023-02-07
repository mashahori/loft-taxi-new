import { Outlet } from "react-router-dom";

import { Logo } from "icons";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <S.Aside>
        <Logo />
      </S.Aside>
      <S.Main>
        <S.Card>
          <Outlet />
        </S.Card>
      </S.Main>
    </S.Container>
  );
};
