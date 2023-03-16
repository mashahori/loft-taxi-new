import { useQuery, UseQueryResult } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ICardInfo } from "app/types";

export const useGetAddresses = () => {
  const { data, ...rest } = useQuery(
    "addresses",
    () => apiClient.get(`/addressList`),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return { data: data?.data, ...rest };
};
