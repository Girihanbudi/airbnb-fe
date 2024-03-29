import { axiosFetch, ResponseProps } from "@/libs/axios";

export const signOut = async (): Promise<ResponseProps> => {
  return axiosFetch({ method: "delete", url: "/auth/sessions/signout" });
};

export default signOut;
