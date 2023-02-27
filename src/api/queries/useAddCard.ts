import { useMutation } from "react-query";

import { getToken } from "services/tokenService";
import { apiClient } from "api/apiClient";

export const useAddCard = (callback?: () => void) =>
  useMutation((values) => apiClient.post("/card", values), {
    onSuccess: (response) => {
      // setToken(response.data.token);
      // if (callback) callback();
    },
  });
