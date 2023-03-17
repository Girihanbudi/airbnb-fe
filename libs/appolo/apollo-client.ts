import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const userClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND}/graph`,
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
  credentials: "include",
});
