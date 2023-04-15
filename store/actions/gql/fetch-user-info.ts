import { ILocale, IUser, ilocaleKeys } from "@/types";
import { userClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  userInfo: IUser | null;
}

export interface Payload {
  keys: (keyof ILocale)[];
}

export const fetchUserInfo = async ({ keys = ilocaleKeys }: Payload) => {
  return await userClient.query<Types>({
    query: gql`
      query {
        user {
          ${keys.join("\n")}
        }
      }
    `,
  });
};

export default fetchUserInfo;
