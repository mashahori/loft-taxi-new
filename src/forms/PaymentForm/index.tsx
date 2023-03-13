import { FC } from "react";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import formatString from "format-string-by-pattern";

import {
  validatePaymentName,
  validateCard,
  validateDate,
  validateCVV,
} from "utils/validate";
import { IPaymentForm } from "app/types";
import { ButtonLoader } from "ui";
import { Card } from "ui/Card";
import { useAddCard, useGetCard } from "api/queries";
import { getToken } from "services/tokenService";
import { PaymentInfo } from "components/PaymentInfo";

import * as S from "./styles";

interface IPaymentSave {
  onSaveCard: (values: IPaymentForm) => void;
  isLoading: boolean;
}

export const PaymentForm: FC<IPaymentSave> = ({ onSaveCard, isLoading }) => {
  return (
    <>
      <S.Container>
        <Form
          onSubmit={onSaveCard}
          render={({ handleSubmit }) => (
            <S.StyledForm onSubmit={handleSubmit}>
              <Field name="cardName" validate={validatePaymentName}>
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="cardName"
                    label="Name on card"
                    variant="standard"
                    placeholder="John Smith"
                    error={!!error && !!touched}
                    helperText={touched ? error : ""}
                  />
                )}
              </Field>

              <Field
                name="cardNumber"
                validate={validateCard}
                parse={formatString("5123 4567 8901 2345")}
              >
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="cardNumber"
                    label="Card number (MasterCard)"
                    variant="standard"
                    placeholder="5123 4567 8901 2345"
                    error={!!error && !!touched}
                    helperText={touched ? error : ""}
                  />
                )}
              </Field>

              <S.Wrapper>
                <Field
                  name="expiryDate"
                  validate={validateDate}
                  parse={formatString("MM/YY")}
                >
                  {({ input, meta: { error, touched } }) => (
                    <TextField
                      {...input}
                      id="expiryDate"
                      label="Expire date"
                      variant="standard"
                      placeholder="MM/YY"
                      error={!!error && !!touched}
                      helperText={touched ? error : ""}
                    />
                  )}
                </Field>

                <Field
                  name="cvc"
                  validate={validateCVV}
                  parse={formatString("123")}
                >
                  {({ input, meta: { error, touched } }) => (
                    <TextField
                      {...input}
                      id="cvc"
                      label="CVC/CVV"
                      variant="standard"
                      placeholder="123"
                      error={!!error && !!touched}
                      helperText={touched ? error : ""}
                      inputProps={{
                        maxLength: 3,
                      }}
                    />
                  )}
                </Field>
              </S.Wrapper>
              <Button type="submit" variant="contained">
                {isLoading ? <ButtonLoader /> : "Save"}
              </Button>
            </S.StyledForm>
          )}
        />
      </S.Container>
    </>
  );
};
