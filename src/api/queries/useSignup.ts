import { useMutation } from "react-query";

import { setToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ISignupPayload } from "utils/types";

export const useSignup = (callback?: () => void) =>
  useMutation((values: ISignupPayload) => apiClient.post("/register", values), {
    onSuccess: (response) => {
      setToken(response.data.token);
      if (callback) callback();
    },
  });
