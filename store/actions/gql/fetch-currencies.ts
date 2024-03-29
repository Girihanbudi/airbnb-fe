import { ICurrency, icurrencyKeys } from "@/types";
import { userClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  currencies: ICurrency[] | null;
}

export interface Payload {
  keys: (keyof ICurrency)[];
}

export const fetchCurrencies = async ({ keys = icurrencyKeys }: Payload) => {
  return await userClient.query<Types>({
    query: gql`
      query {
        currencies {
          ${keys.join("\n")}
        }
      }
    `,
  });
};

export default fetchCurrencies;
