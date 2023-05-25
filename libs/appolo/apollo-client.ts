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

export const userClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND}/user/graph`,
    useGETForQueries: true,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
  credentials: "include",
});

export const propertyClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND}/property/graph`,
    useGETForQueries: true,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
  credentials: "include",
});
