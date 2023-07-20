import { FC, useState } from "react";
import { Form, Field } from "react-final-form";
import {
  Button,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import { useGetAddresses } from "api/queries";
import { IAddressesPayload } from "utils/types";

import * as S from "./styles";

interface IOrderTaxiProps {
  handleOrderTaxi: (values: IAddressesPayload) => void;
}

export const OrderTaxiForm: FC<IOrderTaxiProps> = ({ handleOrderTaxi }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const { data } = useGetAddresses();
  const isSame = start === end;

  const handleChangeStart = (event: SelectChangeEvent) => {
    setStart(event.target.value);
  };

  const handleChangeEnd = (event: SelectChangeEvent) => {
    setEnd(event.target.value);
  };

  const handleSubmit = () =>
    handleOrderTaxi({ address1: start, address2: end });

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <S.StyledForm onSubmit={handleSubmit}>
          <Field name="address1">
            {({ input, meta: { error, touched } }) => (
              <FormControl fullWidth>
                <InputLabel>From</InputLabel>
                <Select
                  value={start}
                  onChange={handleChangeStart}
                  variant="standard"
                >
                  {data?.addresses?.map((el: string) => (
                    <MenuItem key={`from-${el}`} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="address2">
            {({ input, meta: { error, touched } }) => (
              <FormControl fullWidth>
                <InputLabel>To</InputLabel>
                <Select
                  value={end}
                  onChange={handleChangeEnd}
                  variant="standard"
                >
                  {data?.addresses?.map((el: string) => (
                    <MenuItem key={`to-${el}`} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>

          <Button type="submit" variant="contained" disabled={isSame}>
            Get Taxi
          </Button>
        </S.StyledForm>
      )}
    />
  );
};
