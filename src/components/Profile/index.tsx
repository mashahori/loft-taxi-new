import { Card } from "ui/Card";
import { PaymentForm } from "forms/PaymentForm";

import * as S from "./styles";

export const Profile = () => {
  const handleSaveCard = () => {};
  return (
    <S.Container>
      <S.Wrapper>
        <Card>
          <S.Title>Профиль</S.Title>
          <S.Text>Введите платежные данные</S.Text>
          <PaymentForm onSaveCard={handleSaveCard} />
        </Card>
      </S.Wrapper>
    </S.Container>
  );
};
