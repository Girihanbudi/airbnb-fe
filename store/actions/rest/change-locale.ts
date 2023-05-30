import { axiosFetch, ResponseProps } from "@/libs/axios";

export const changeLocale = async (locale: string): Promise<ResponseProps> => {
  return axiosFetch({
    method: "put",
    url: "/user/me/locale",
    data: { locale: locale },
  });
};

export default changeLocale;
