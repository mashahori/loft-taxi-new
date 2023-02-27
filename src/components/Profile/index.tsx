import { Card } from "ui/Card";
import { PaymentForm } from "forms/PaymentForm";
import { useAddCard, useGetCard } from "api/queries";
import { getToken } from "services/tokenService";
import { PaymentInfo } from "components/PaymentInfo";

import * as S from "./styles";

export const Profile = () => {
  const { mutate } = useAddCard();

  const { status, data, error } = useGetCard();

  const handleSaveCard = (values) => {
    mutate({ ...values, token: getToken() });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Card>
          <S.Title>Профиль</S.Title>
          <S.Text>Введите платежные данные</S.Text>
          <PaymentForm onSaveCard={handleSaveCard} />
          {data && <PaymentInfo info={data.data} />}
        </Card>
      </S.Wrapper>
    </S.Container>
  );
};
