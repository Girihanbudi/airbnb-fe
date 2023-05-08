import {
  IPagination,
  IPropertyType,
  ipropertyTypeKeys,
  ipaginationKeys,
} from "@/types";
import { authClient } from "@/libs/appolo";
import { gql } from "@apollo/client";

interface Types {
  propertyTypes: {
    meta: IPagination;
    data: IPropertyType[] | null;
  };
}

export interface Payload {
  keys: (keyof IPropertyType)[];
  page?: number;
  limit?: number;
}

export const fetchPropertyTypes = async ({
  keys = ipropertyTypeKeys,
  page = 1,
  limit = 25,
}: Payload) => {
  return await authClient.query<Types>({
    query: gql`
      query {
        propertyTypes(page: ${page} limit: ${limit}) {
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

export default fetchPropertyTypes;
