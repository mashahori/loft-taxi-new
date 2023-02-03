import { Logo } from "../../icons";
import { Auth } from "../../components"; //TODO ошибка тс

import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <S.Aside>
        <Logo />
      </S.Aside>
      <S.Main>
        <Auth />
      </S.Main>
    </S.Container>
  );
};
