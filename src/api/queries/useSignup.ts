import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { setToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ISignupPayload, IError } from "utils/types";

export const useSignup = (callback?: () => void) =>
  useMutation((values: ISignupPayload) => apiClient.post("/register", values), {
    onSuccess: (response) => {
      if (response.data.error) {
        toast.error(response.data.error);
        return;
      }
      setToken(response.data.token);
      if (callback) callback();
    },
    onError: (response: IError) => {
      toast.error(response.error);
    },
  });
