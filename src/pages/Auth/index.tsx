import { Outlet } from "react-router-dom";

import { LogoMain } from "icons";

import * as S from "./styles";

export const Auth = () => {
  return (
    <S.Container>
      <S.Aside>
        <LogoMain />
      </S.Aside>
      <S.Main>
        <S.Card>
          <Outlet />
        </S.Card>
      </S.Main>
    </S.Container>
  );
};
