import { Form, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {
  validateName,
  validateCard,
  validateDate,
  validateCVV,
} from "utils/validate";
import { useLogin } from "api/queries/useLogin";
import formatString from "format-string-by-pattern";

export const PaymentForm = ({ onSaveCard }) => {
  return (
    <>
      <Conteiner>
        <Form
          onSubmit={onSaveCard}
          render={({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Field name="name" validate={validateName}>
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="name"
                    label="Name on card"
                    variant="standard"
                    placeholder="John Smith"
                    error={!!error && !!touched}
                    helperText={touched ? error : ""}
                  />
                )}
              </Field>

              <Field
                name="card"
                validate={validateCard}
                parse={formatString("1234 5678 9012 3456")}
              >
                {({ input, meta: { error, touched } }) => (
                  <TextField
                    {...input}
                    id="card"
                    label="Card number (MasterCard)"
                    variant="standard"
                    placeholder="1234 5678 9012 3456"
                    error={!!error && !!touched}
                    helperText={touched ? error : ""}
                  />
                )}
              </Field>

              <Wrapper>
                <Field
                  name="date"
                  validate={validateDate}
                  parse={formatString("MM/YY")}
                >
                  {({ input, meta: { error, touched } }) => (
                    <TextField
                      {...input}
                      id="date"
                      label="Expire date"
                      variant="standard"
                      placeholder="MM/YY"
                      error={!!error && !!touched}
                      helperText={touched ? error : ""}
                    />
                  )}
                </Field>

                <Field
                  name="cvv"
                  validate={validateCVV}
                  parse={formatString("123")}
                >
                  {({ input, meta: { error, touched } }) => (
                    <TextField
                      {...input}
                      id="cvv"
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
              </Wrapper>
            </StyledForm>
          )}
        />
        {/* <PaymentInfo /> */}
      </Conteiner>
      <Button type="submit" variant="contained">
        Save
      </Button>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
  max-width: 300px;
`;

const Conteiner = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
