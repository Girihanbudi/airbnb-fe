import { ILocale } from "../../../types/ilocale";
import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

interface Types {
  locales: ILocale[] | null;
}

export const fetchLocales = async () => {
  return await client.query<Types>({
    query: gql`
      query {
        locales {
          code
          name
          local
          location
          lcid
          iso639_1
          iso639_2
        }
      }
    `,
  });
};

export default fetchLocales;
