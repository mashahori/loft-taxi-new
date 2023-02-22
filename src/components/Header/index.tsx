import { Navigation } from "ui";
import { LogoHeader } from "icons";

import { HEADER_ITEMS } from "constants/headerItems";
import { IHeaderItem } from "app/types";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <LogoHeader />
      <nav>
        <S.List>
          {HEADER_ITEMS.map(({ text, path }: IHeaderItem) => (
            <li key={path}>
              <Navigation text={text} path={path} />
            </li>
          ))}
        </S.List>
      </nav>
    </S.Wrapper>
  );
};
