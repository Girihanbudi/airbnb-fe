import { IUser, iuserKeys } from "@/types";
import { userClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  user: IUser | null;
}

export interface Payload {
  keys: (keyof IUser)[];
}

export const fetchUserInfo = async ({ keys = iuserKeys }: Payload) => {
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
