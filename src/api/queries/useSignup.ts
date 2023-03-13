import { useMutation } from "react-query";

import { setToken } from "services/tokenService";
import { apiClient } from "api/apiClient";

export const useSignup = (callback?: () => void) =>
  useMutation((values) => apiClient.post("/register", values), {
    onSuccess: (response) => {
      setToken(response.data.token);
      if (callback) callback();
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
