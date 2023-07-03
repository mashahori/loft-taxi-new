import { FC } from "react";
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
