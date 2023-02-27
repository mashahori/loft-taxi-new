import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { CardInfo } from "app/types";

// type GetCard = () => UseQueryResult<
//   AxiosResponse<{ data: CardInfo }>,
//   AxiosError<{ error: string }>
// >;

export const useGetCard = (callback?: () => void) => {
  const { data, ...rest } = useQuery(
    "card",
    () => apiClient.get(`/card?token=${getToken()}`),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return { data, ...rest };
};
