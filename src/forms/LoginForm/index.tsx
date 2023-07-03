import { FC } from "react";
import { Form, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { validateEmail, validatePassword } from "utils/validate";
import { useLogin } from "api/queries/useLogin";
import { ButtonLoader } from "ui";

interface ILoginForm {
  onLogin: () => void;
}

export const LoginForm: FC<ILoginForm> = ({ onLogin }) => {
  const { mutate, isLoading } = useLogin(() => {
    onLogin();
    navigate("/map");
  });
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    mutate({ email, password });
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h2>Log in</h2>

            <Field name="email" validate={validateEmail}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="email"
                  label="Email*"
                  variant="standard"
                  placeholder="mail@mail.ru"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Field name="password" validate={validatePassword}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  type="password"
                  id="password"
                  label="Password*"
                  variant="standard"
                  placeholder="*************"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Button type="submit" variant="contained">
              {isLoading ? <ButtonLoader /> : "Log in"}
            </Button>
          </StyledForm>
        )}
      />
      <Link to="/auth/signup">Create new account</Link>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;
