import { useQuery, UseQueryResult, useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { getToken } from "services/tokenService";
import { apiClient } from "api/apiClient";
import { ICardInfo } from "app/types";

interface IDataAdresses {
  address1: string;
  address2: string;
}

export const useOrderTaxi = (callback?: () => void) =>
  useMutation(
    (addresses: IDataAdresses) =>
      apiClient.get(
        `/route?address1=${addresses.address1}&address2=${addresses.address2}`
      ),
    {
      onSuccess: () => {
        if (callback) callback();
      },
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
