import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// ref setting : https://www.apollographql.com/docs/react/networking/authentication/
export const authClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND}/auth/graph`,
    useGETForQueries: true,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
  credentials: "include",
});
