import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

class HttpLogin {
  apiLogin: AxiosInstance;

  constructor() {
    const { VITE_REACT_APP_API } = import.meta.env;
    this.apiLogin = axios.create({
      baseURL: VITE_REACT_APP_API,
      timeout: 60000,
      timeoutErrorMessage: 'Tempo limite da requisição excedido.',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.initInterceptors();
  }

  initInterceptors() {
    this.apiLogin.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
      return config;
    });
    this.apiLogin.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        const err = {
          ...error,
          status: error?.response?.status,
          data: error?.response?.data,
        };

        return Promise.reject(err);
      },
    );
  }
}
export const { apiLogin } = new HttpLogin();
