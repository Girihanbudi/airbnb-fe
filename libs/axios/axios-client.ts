import { StdResponse, StdError, ServerErrorResponseAPI } from "@/common";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const axiosClient = axios.create();
axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND!;
axiosClient.defaults.timeout = 2500;

export interface ResponseProps {
  status: number;
  data: StdResponse;
}

export const axiosFetch = async (
  config: AxiosRequestConfig
): Promise<ResponseProps> => {
  try {
    const res = await axiosClient(config);

    if (res.status < 300) {
      return { status: res.status, data: res.data };
    }
  } catch (e: any) {
    const error = e as AxiosError;
    if (error.response) {
      const data = error.response.data as StdError;
      let res: StdResponse = {
        error: data,
      };
      return { status: error.response.status, data: res };
    }
  }
  let internalResErr: StdResponse = {
    error: ServerErrorResponseAPI,
  };

  return { status: 500, data: internalResErr };
};

export const axiosFetcher = (config: AxiosRequestConfig) =>
  axios(config).then((res) => res.data.data);

export default axiosClient;
