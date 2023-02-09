import { useMutation } from "react-query";
import { redirect } from "react-router-dom";

import { setToken } from "services/tokenService";
import { apiClient } from "api/apiClient";

export const useLogin = (callback?: () => void) =>
  useMutation((values) => apiClient.post("/auth", values), {
    onSuccess: (response) => {
      setToken(response.data.token);
    },
  });
