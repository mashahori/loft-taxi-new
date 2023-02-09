import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const baseUrl = "https://loft-taxi.glitch.me";

export const axiosConfig: AxiosRequestConfig = {
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiClient = (() => {
  const instance: AxiosInstance = axios.create(axiosConfig);
  // Add a request interceptor
  // instance.interceptors.request.use(
  //   (requestConfig) => {
  //     const token = TokenService.getToken();
  //     if (token && !requestConfig.headers["Authorization"]) {
  //       requestConfig.headers["Authorization"] = "Bearer " + token;
  //     }
  //     return requestConfig;
  //   },
  //   (requestError) => requestError
  // );

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
})();
