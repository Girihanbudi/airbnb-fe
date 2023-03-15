// ./apollo-client.js

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

type ClientName = "main" | "other";

const mainServiceClient = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graph`,
});

var thirdPartyServiceClient = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graph`,
});

export const changeThirdPartyLink = (newLink: string) => {
  thirdPartyServiceClient = new HttpLink({
    uri: newLink,
  });
};

export const client = new ApolloClient({
  // link: ApolloLink.split(
  //   (operation) => operation.getContext().clientName === "main",
  //   mainServiceClient, //if above
  //   thirdPartyServiceClient
  // ),
  uri: `${process.env.NEXT_PUBLIC_BACKEND}/graph`,
  cache: new InMemoryCache(),
});

export default client;
