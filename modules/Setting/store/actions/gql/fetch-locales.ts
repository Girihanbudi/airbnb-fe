import { ILocale, ilocaleKeys } from "./../../../types/ilocale";
import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

interface Types {
  locales: ILocale[] | null;
}

export const fetchLocales = async (keys: (keyof ILocale)[] = ilocaleKeys) => {
  return await client.query<Types>({
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
