import { FC } from "react";
import React from "react";

import { Card } from "ui/Card";
import { PaymentForm } from "forms/PaymentForm";
import { useAddCard, useGetCard } from "api/queries";
import { getToken } from "services/tokenService";
import { PaymentInfo } from "components/PaymentInfo";
import { IPaymentForm } from "app/types";

import * as S from "./styles";

export const Profile: FC = () => {
  const { status, data, error, refetch } = useGetCard();

  const { mutate } = useAddCard(() => refetch());

  const handleSaveCard = (values: IPaymentForm) => {
    mutate({ ...values, token: getToken() });
  };

  return (
    <S.Container>
      <Card height={600}>
        <S.Wrapper>
          <S.Title>Профиль</S.Title>
          <S.Text>Введите платежные данные</S.Text>
          <S.Flex>
            <PaymentForm onSaveCard={handleSaveCard} />
            {data && (
              <PaymentInfo
                cardNumber={data.cardNumber}
                expiryDate={data.expiryDate}
              />
            )}
          </S.Flex>
        </S.Wrapper>
      </Card>
    </S.Container>
  );
};
