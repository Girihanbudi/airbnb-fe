import { IPagination, ICountry, icountryKeys, ipaginationKeys } from "@/types";
import { authClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  countries: {
    meta: IPagination;
    data: ICountry[] | null;
  };
}

export interface Payload {
  keys: (keyof ICountry)[];
  page?: number;
  limit?: number;
}

export const fetchCountries = async ({
  keys = icountryKeys,
  page = 1,
  limit = 25,
}: Payload) => {
  return await authClient.query<Types>({
    query: gql`
      query {
        countries(page: ${page} limit: ${limit}) {
          data {
            ${keys.join("\n")}
          }
          meta {
            ${ipaginationKeys.join("\n")}
          }
        }
      }
    `,
  });
};

export default fetchCountries;
