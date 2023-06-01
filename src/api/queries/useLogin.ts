import { useMutation } from "react-query";

import { setToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ILoginPayload } from "utils/types";

export const useLogin = (callback?: () => void) =>
  useMutation((values: ILoginPayload) => apiClient.post("/auth", values), {
    onSuccess: (response) => {
      setToken(response.data.token);
      if (callback) callback();
    },
  });
