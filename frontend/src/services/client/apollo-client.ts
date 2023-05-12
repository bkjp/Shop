import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
//import { API_URL } from "../../config/VariableConfig";

//const API_URL = process.env.NEXT_API_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const create = () => {
//   const isBrowser = typeof window !== "undefined";

//   return new ApolloClient({
//     connectToDevTools: isBrowser,
//     ssrMode: !isBrowser,
//     link: new HttpLink({
//       uri: isBrowser
//         ? "http://localhost:8000/graphql/"
//         : "http://django:8000/graphql/",
//     }),
//     cache: new InMemoryCache(),
//   });
// };

// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com",
//   cache: new InMemoryCache(),
// });

// const client = new ApolloClient({
//   uri: "http://localhost:8000/graphql/",
//   cache: new InMemoryCache(),
// });

const isBrowser = typeof window !== "undefined";

const client = new ApolloClient({
  connectToDevTools: isBrowser,
  ssrMode: !isBrowser,
  link: new HttpLink({
    uri: isBrowser
      ? "http://localhost:8000/graphql/"
      : "http://django:8000/graphql/",
  }),
  cache: new InMemoryCache(),
});

export default client;

//let apolloClient = null;
