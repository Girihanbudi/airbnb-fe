import { ILocale, ilocaleKeys } from "@/types";
import { authClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  locales: ILocale[] | null;
}

export interface Payload {
  keys: (keyof ILocale)[];
}

export const fetchLocales = async ({ keys = ilocaleKeys }: Payload) => {
  return await authClient.query<Types>({
    query: gql`
      query {
        locales {
          ${keys.join("\n")}
        }
      }
    `,
  });
};

export default fetchLocales;
