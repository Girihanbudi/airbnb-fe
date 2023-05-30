import { axiosFetch, ResponseProps } from "@/libs/axios";

export const changeCurrency = async (
  currency: string
): Promise<ResponseProps> => {
  return axiosFetch({
    method: "put",
    url: "/user/me/currency",
    data: { currency: currency },
  });
};

export default changeCurrency;
