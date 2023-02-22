import { Form, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { validateEmail, validatePassword, validateName } from "utils/validate";
import { useSignup } from "api/queries/useSignup";

export const SignupForm = ({ onSignup }) => {
  const { mutate } = useSignup(() => {
    onSignup();
    navigate("/map");
  });
  const navigate = useNavigate();

  const onSubmit = ({ email, password, name, surname }) => {
    mutate({ email, password, name, surname });
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h2>Sign up</h2>

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

            <Field name="name" validate={validateName}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="name"
                  label="First Name*"
                  variant="standard"
                  placeholder="First Name"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Field name="surname" validate={validateName}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="surname"
                  label="Last Name*"
                  variant="standard"
                  placeholder="Last Name*"
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
                  placeholder="*****"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Button type="submit" variant="contained">
              Sign up
            </Button>
          </StyledForm>
        )}
      />
      <Link to="/auth/login">Log in</Link>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;
