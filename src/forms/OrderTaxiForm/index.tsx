import { FC, useState } from "react";
import { Form, Field } from "react-final-form";
import { Button, Select, SelectChangeEvent, MenuItem } from "@mui/material";

// import { IPaymentForm } from "app/types";
import { Card } from "ui";

import * as S from "./styles";

// interface IPaymentSave {
//   onSaveCard: (values: IPaymentForm) => void;
// }

export const OrderTaxiForm: FC = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleChangeStart = (event: SelectChangeEvent) => {
    setStart(event.target.value);
  };

  const handleChangeEnd = (event: SelectChangeEvent) => {
    setEnd(event.target.value);
  };

  return (
    <S.Container>
      <Card>
        <Form
          onSubmit={() => {}}
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
