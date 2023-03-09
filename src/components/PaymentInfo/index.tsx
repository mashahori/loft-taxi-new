import { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Card } from "ui/Card";
import { ICardInfo } from "app/types";

import * as S from "./styles";

type IPaymentInfoCard = Pick<ICardInfo, "cardNumber" | "expiryDate">;

export const PaymentInfo: FC<IPaymentInfoCard> = ({
  cardNumber,
  expiryDate,
}) => {
  return (
    <S.Wrapper>
      <S.Date>{expiryDate}</S.Date>
      <S.Number>{cardNumber}</S.Number>
    </S.Wrapper>
  );
};
