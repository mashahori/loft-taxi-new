import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ICardInfo } from "app/types";

export const useGetCard = (callback?: () => void) => {
  const { data, ...rest } = useQuery(
    "card",
    () => apiClient.get(`/card?token=${getToken()}`),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return { data: data?.data, ...rest };
};
