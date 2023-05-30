import { FC, useState } from "react";
import { Form, Field } from "react-final-form";
import { Button, Select, SelectChangeEvent, MenuItem } from "@mui/material";

// import { IPaymentForm } from "app/types";
import { Card } from "ui";
import { useGetAddresses, useOrderTaxi } from "api/queries";

import * as S from "./styles";

// interface IPaymentSave {
//   onSaveCard: (values: IPaymentForm) => void;
// }

export const OrderTaxiForm: FC = ({ handleOrderTaxi }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const { data } = useGetAddresses();

  const handleChangeStart = (event: SelectChangeEvent) => {
    setStart(event.target.value);
  };

  const handleChangeEnd = (event: SelectChangeEvent) => {
    setEnd(event.target.value);
  };

  const handleSubmit = () =>
    handleOrderTaxi({ address1: start, address2: end });

  return (
    <S.Container>
      <Card>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <S.StyledForm onSubmit={handleSubmit}>
              <Field name="address1">
                {({ input, meta: { error, touched } }) => (
                  <Select
                    value={start}
                    onChange={handleChangeStart}
                    label="Start"
                    variant="standard"
                  >
                    {data?.addresses?.map((el: string) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                )}
              </Field>

              <Field name="address2">
                {({ input, meta: { error, touched } }) => (
                  <Select
                    value={end}
                    onChange={handleChangeEnd}
                    label="End"
                    variant="standard"
                  >
                    {data?.addresses?.map((el: string) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                )}
              </Field>

              <Button type="submit" variant="contained">
                Get Taxi
              </Button>
            </S.StyledForm>
          )}
        />
      </Card>
    </S.Container>
  );
};
