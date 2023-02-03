import { Form, Field } from "react-final-form";
// import PropTypes from "prop-types";
// import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import { Container, Typography } from "@material-ui/core";
// import { Logo } from "loft-taxi-mui-theme";
// import { loginAction } from "../../modules/actions";
// import Card from "../Card";

// import style from "./Login.module.css";

// const useStyles = makeStyles({
//   container: {
//     paddingTop: "10vh",
//     maxWidth: "1000px",
//     alignItems: "center",
//     display: "flex",
//   },
//   title: {
//     fontSize: "36px",
//     marginBottom: "30px",
//   },
//   subtitle: {
//     marginBottom: "30px",
//     display: "flex",
//   },
// });

export const Login = (props) => {
  // const classes = useStyles();

  const onSubmit = (email, password) => {};
  const validate = () => {};

  return (
    <div>
      {/* {props.authed ? (
        <Redirect to="/map" />
      ) : (
        <div className={style.login}>
          <Container className={classes.container}>
            <Logo white />
            <div className={style.card}>
              <Typography variant="h2" className={classes.title}>
                Войти
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Новый пользователь?
                <Link className={style.link} to="/signup">
                  Зарегестрируйтесь
                </Link>
              </Typography>
              <Card handleSubmit={handleSubmit} />
            </div>
          </Container>
        </div>
      )} */}
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Войти</h2>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
              />
            </div>

            {/* <h2>An Arbitrary Reusable Input Component</h2>
            <div>
              <label>Interests</label>
              <Field name="interests" component={InterestPicker} />
            </div> */}

            <h2>Render Function</h2>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <h2>Render Function as Children</h2>
            <Field name="phone">
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input type="text" {...input} placeholder="Phone" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit">Submit</button>
          </form>
        )}
      />
      Новый пользователь? Регистрация
    </div>
  );
};

// Login.propTypes = {
//   authed: PropTypes.bool,
//   login: PropTypes.func,
// };

// Login.defaultProps = {
//   authed: false,
//   login: () => {},
// };

// const mapStateToProps = (state) => ({
//   authed: state.authed,
// });

// const mapDispathToProps = (dispatch) => ({
//   login: (user) => dispatch(loginAction(user)),
// });

// export default connect(mapStateToProps, mapDispathToProps)(Login);
