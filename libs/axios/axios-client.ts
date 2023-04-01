import { StdResponse, StdError, ServerErrorResponseAPI } from "@/common";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

const axiosClient = axios.create();
axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND!;
axiosClient.defaults.timeout = 2500;

export const axiosFetch = async (
  config: AxiosRequestConfig
): Promise<[number, StdResponse]> => {
  try {
    const res = await axios(config);

    if (res.status < 300) {
      return [res.status, res.data];
    }
  } catch (e: any) {
    const error = e as AxiosError;
    if (error.response) {
      const data = error.response.data as StdError;
      let res: StdResponse = {
        error: data,
      };
      return [error.response.status, res];
    }
  }
  let internalResErr: StdResponse = {
    error: ServerErrorResponseAPI,
  };

  return [500, internalResErr];
};

export const axiosFetcher = (config: AxiosRequestConfig) =>
  axios(config).then((res) => res.data.data);

export default defaultAxios;
