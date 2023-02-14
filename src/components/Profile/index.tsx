// import React from "react";
// import PropTypes from "prop-types";
// import { Button, Typography, Paper } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import style from "./Profile.module.css";
// import ProfileCard from "./ProfileCard/ProfileCard.js";
// import { addCardAction } from "../../modules/actions.js";
import { Card } from "ui/Card";

import * as S from "./styles";

// const useStyles = makeStyles({
//   wrapper: {
//     maxWidth: "630px",
//     padding: "44px 60px",
//     position: "absolute",
//     top: "100px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     textAlign: "center",
//   },
//   textField: {
//     marginBottom: "30px",
//     width: "100%",
//   },
//   title: {
//     fontSize: "36px",
//   },
//   subtitle: {
//     marginBottom: "40px",
//   },
//   card: {
//     maxWidth: "300px",
//     padding: "16px 32px",
//     boxSizing: "border-box",
//   },
// });

// const Profile = (props) => {
//   const classes = useStyles();

//   const handleSubmit = (number, name, date, cvc) => {
//     props.addCard({
//       number,
//       name,
//       date,
//       cvc,
//     });
//   };

//   return (
//     <div className={style.profile}>
//       <Paper className={classes.wrapper}>
//         <Typography variant="h2" className={classes.title}>
//           Профиль
//         </Typography>
//         <Typography variant="subtitle2" className={classes.subtitle}>
//           Способ оплаты
//         </Typography>
//         {props.cardIsExist ? (
//           <>
//             <p>
//               Платежные данные обновлены. Теперь вы можете заказывать такси.
//             </p>
//             <Button
//               to="map"
//               component={Link}
//               variant="contained"
//               color="primary"
//             >
//               Перейти на карту
//             </Button>
//           </>
//         ) : (
//           <ProfileCard handleSubmit={handleSubmit} />
//         )}
//       </Paper>
//     </div>
//   );
// };

// Profile.propTypes = {
//   addCard: PropTypes.func,
//   cardIsExist: PropTypes.bool,
// };

// Profile.defaultProps = {
//   addCard: () => {},
//   cardIsExist: false,
// };

// const mapStateToProps = (state) => ({
//   cardIsExist: state.cardIsExist,
// });

// const mapDispathToProps = (dispatch) => ({
//   addCard: (card) => dispatch(addCardAction(card)),
// });

export const Profile = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Card>
          <S.Title>Профиль</S.Title>
          <S.Text>Введите платежные данные</S.Text>
        </Card>
      </S.Wrapper>
    </S.Container>
  );
};

// export default connect(mapStateToProps, mapDispathToProps)(Profile);
