import { createApp, provide, h} from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"


// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "https://api.8base.com/clc5wztdo00fz08l2566g2ak0",
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

/* prettier-ignore */
app.use(router).use(createPinia())
app.mount("#app");
