import { useState, FC } from "react";

import { Signup, Login } from "../";

import * as S from "./styles";

export const Auth: FC = () => {
  const [page, setPage] = useState<string>("login");
  return <S.Card>{page === "login" ? <Login /> : <Signup />}</S.Card>;
};
