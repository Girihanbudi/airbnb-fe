import { ICurrency, icurrencyKeys } from "../../../types";
import { userClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  currencies: ICurrency[] | null;
}

export const fetchCurrencies = async (
  keys: (keyof ICurrency)[] = icurrencyKeys
) => {
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

export default fetchCurrencies;
