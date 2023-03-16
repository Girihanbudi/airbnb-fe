import { ILocale, ilocaleKeys } from "./../../../types/ilocale";
import { userClient } from "@/libs/apollo-client";
import { gql } from "@apollo/client";

interface Types {
  locales: ILocale[] | null;
}

export const fetchLocales = async (keys: (keyof ILocale)[] = ilocaleKeys) => {
  return await userClient.query<Types>({
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
