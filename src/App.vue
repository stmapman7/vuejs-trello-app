<script setup lang="ts">
// import TheNavbar from './components/TheNavbar.vue'
// import TheAlerts from './components/TheAlerts.vue'
// import TheDrawer from './components/TheDrawer.vue'

import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/graphql/apolloClient";
import { useScriptTag } from "@vueuse/core";

// Provide Apollo Client to all Vue Components
provide(DefaultApolloClient, apolloClient);

// Initialize TwicPic
useScriptTag(`${import.meta.env.VITE_TWICPICS_URL}?v1`);
</script>

<template>
  <TheNavbar />
  <TheDrawer />
  <TheAlerts />
</template>
