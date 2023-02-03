import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import { Button, TextField } from "@material-ui/core";

import style from "./Card.module.css";

// const useStyles = makeStyles({
//   textField: {
//     marginBottom: "30px",
//     width: "100%",
//   },
// });

export const Card = (props) => {
  // const classes = useStyles();
  const { handleSubmit, mode } = props;

  const handleSubmitCard = (e) => {
    e.preventDefault();
    if (mode === "signup") {
      props.handleSubmit(
        e.target.email.value,
        e.target.password.value,
        e.target.name.value,
        e.target.surname.value
      );
    } else {
      handleSubmit(e.target.email.value, e.target.password.value);
    }
  };

  return (
    <>Card</>
    // <form className={style.form} onSubmit={handleSubmitCard}>
    //   <TextField
    //     className={classes.textField}
    //     type="email"
    //     name="email"
    //     required
    //     label={<span>Имя пользователя</span>}
    //   />
    //   {mode === "signup" && (
    //     <div className={style.group}>
    //       <TextField
    //         className={classes.textFieldGroup}
    //         type="text"
    //         name="name"
    //         required
    //         label={<span>Имя</span>}
    //       />
    //       <TextField
    //         className={classes.textFieldGroup}
    //         type="text"
    //         name="surname"
    //         required
    //         label={<span>Фамилия</span>}
    //       />
    //     </div>
    //   )}
    //   <TextField
    //     className={classes.textField}
    //     type="password"
    //     name="password"
    //     required
    //     label={<span>Пароль</span>}
    //   />
    //   <Button
    //     className={style.login__submit}
    //     variant="contained"
    //     color="primary"
    //     type="submit"
    //   >
    //     Войти
    //   </Button>
    // </form>
  );
};

// Card.propTypes = {
//   handleSubmit: PropTypes.func,
//   mode: PropTypes.string,
// };

// Card.defaultProps = {
//   handleSubmit: () => {},
//   mode: 'default',
// };

// export default Card;
