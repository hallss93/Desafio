/* eslint-disable no-prototype-builtins */
import axios from 'axios';

const axiosConfigDefault = { timeout: 30000, maxRedirects: 0 };

export const isHandlerEnabled = (config: any) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

const contentType = 'application/json;charset=UTF-8';

const requestHandler = async (request: {} | any) => {
  if (isHandlerEnabled(request)) {
    request.headers['Content-Type'] = contentType;
    request.headers['Access-Control-Allow-Methods'] = '*';
    request.headers['Access-Control-Expose-Headers'] = 'Authorization,Location';
  }
  return request;
};

export const errorHandler = (error: { response: any; request: any; message: string }) => {
  return Promise.reject({ ...error });
};

const errorLoginHandler = (error: { response: any; request: any }) => {
  const objError = error.response || error.request;
  let messageKey = null;

  if (objError && objError.status) {
    if (objError.status === 400) {
      const { data } = objError;
      if (data && data.message) {
        messageKey = data.message;
      }
    }
  }

  return Promise.reject({ ...error });
};

const successHandler = (response: any) => {
  return response;
};

const { VITE_REACT_APP_API } = import.meta.env;

const axiosEVMInstance = axios.create({
  ...axiosConfigDefault,
  baseURL: VITE_REACT_APP_API,
});

[axiosEVMInstance].forEach((item, index) => {
  item.interceptors.request.use(requestHandler, errorHandler);

  item.interceptors.response.use(successHandler, index === 0 ? errorHandler : errorLoginHandler);
});

const defaultApi = axios.create({
  ...axiosConfigDefault,
});

export { axiosEVMInstance, defaultApi };
