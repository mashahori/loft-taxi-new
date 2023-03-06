import { useMutation } from "react-query";

import { apiClient } from "api/apiClient";
import { IPaymentForm, IToken } from "app/types";

export const useAddCard = (callback?: () => void) =>
  useMutation(
    (values: IPaymentForm & IToken) => apiClient.post("/card", values),
    {
      onSuccess: () => {
        if (callback) callback();
      },
    }
  );
