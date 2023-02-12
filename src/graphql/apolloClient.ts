import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client/core";
// import { useAuthUserStore } from "@/stores/AuthUserStore";
// import { setContext } from "@apollo/client/link/context";
// import { onError } from "@apollo/client/link/error";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri:import.meta.env.VITE_APP_WORKSPACE_ENDPOINT,
});

// Authorization Link
// const setAuthorizationLink = setContext((request, previousContext) => {
//   const store = useAuthUserStore();
//   return store.authenticated
//     ? {
//         ...previousContext,
//         headers: {
//           authorization: `Bearer ${store.idToken}`,
//         },
//       }
//     : previousContext;
// });

// Error handling
// const setErrorHandler = onError((error) => {
//   const badToken = !!error.response?.errors?.find(
//     (e: { code: string }) =>
//       e.code === "TokenExpiredError" || e.code === "InvalidTokenError"
//   );
//   if (badToken) {
//     const store = useAuthUserStore();
//     store.login();
//   }
// });

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient;