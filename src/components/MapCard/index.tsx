import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import * as S from "./styles";

export const MapCard = () => {
  return (
    <>
      <S.Title>Add payment method</S.Title>
      <S.Text>Enter Your Payment Information</S.Text>
      <Button
        to="/profile"
        component={Link}
        variant="contained"
        color="primary"
      >
        go to profile
      </Button>
    </>
  );
};
